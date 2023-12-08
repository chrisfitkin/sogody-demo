/*
5. Write unit tests

Prompt:
Write unit tests for the service and methods in spreedlyService3.ts

Prompt: 
Add a couple tests for malformed or bad data 
*/

import { SpreedlyService } from './spreedlyService3';
import { CreateGooglePayRequest } from './index';

describe('SpreedlyService', () => {
    let service: SpreedlyService;

    beforeEach(() => {
        service = new SpreedlyService('environmentKey', 'accessSecret');
    });

    it('should create an instance', () => {
        expect(service).toBeTruthy();
    });

    describe('createGooglePay', () => {
        it('should throw an error if response does not match expected type', async () => {
            const input: CreateGooglePayRequest = {
                payment_method: {
                    google_pay: {
                        payment_data: {
                            signature: 'test',
                            protocolVersion: 'test',
                            signedMessage: 'test'
                        },
                        test_card_number: 'test',
                        first_name: 'test',
                        last_name: 'test'
                    },
                    email: 'test@test.com'
                }
            };

            service.makeRequest = jest.fn().mockResolvedValue({});

            await expect(service.createGooglePay(input)).rejects.toThrow('Response does not match expected type CreateGooglePayResponse');
        });

        it('should throw an error if input is malformed', async () => {
            const malformedInput = {
                payment_method: {
                    google_pay: {
                        payment_data: {
                            signature: 123,
                            protocolVersion: {},
                            signedMessage: []
                        },
                        test_card_number: 'test',
                        first_name: 'test',
                        last_name: 'test'
                    },
                    email: 'test@test.com'
                }
            };

            service.makeRequest = jest.fn().mockResolvedValue({});

            await expect(service.createGooglePay(malformedInput as any)).rejects.toThrow('Input is malformed');
        });

        it('should throw an error if input is missing required fields', async () => {
            const missingFieldsInput = {
                payment_method: {
                    google_pay: {
                        payment_data: {
                            signature: 'test',
                            protocolVersion: 'test',
                            signedMessage: 'test'
                        },
                        test_card_number: 'test',
                        first_name: 'test',
                        last_name: 'test'
                    }
                }
            };

            service.makeRequest = jest.fn().mockResolvedValue({});

            await expect(service.createGooglePay(missingFieldsInput)).rejects.toThrow('Input is missing required fields');
        });
    });
});
