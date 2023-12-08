import { SpreedlyService } from './spreedlyService';

describe('SpreedlyService', () => {
    let service: SpreedlyService;

    beforeEach(() => {
        service = new SpreedlyService('environmentKey', 'accessSecret');
    });

    it('should create an instance', () => {
        expect(service).toBeTruthy();
    });

    describe('makeRequest', () => {
        it('should make a request', async () => {
            const response = await service.makeRequest('url', 'POST', {});
            expect(response).toBeDefined();
        });
    });

    describe('paymentMethods', () => {
        it('should create Apple Pay', async () => {
            const response = await service.paymentMethods.createApplePay('applePayToken');
            expect(response).toBeDefined();
        });

        it('should create Credit Card', async () => {
            const response = await service.paymentMethods.createCreditCard({});
            expect(response).toBeDefined();
        });

        it('should create Google Pay', async () => {
            const googlePayInput: CreateGooglePayInput = {
                google_pay: {
                    payment_data: {
                        signature: 'test_signature',
                        protocolVersion: 'test_protocolVersion',
                        signedMessage: 'test_signedMessage'
                    },
                    first_name: 'test_first_name',
                    last_name: 'test_last_name',
                    test_card_number: 'test_card_number',
                    address1: 'test_address1',
                    address2: 'test_address2',
                    city: 'test_city',
                    state: 'test_state',
                    zip: 'test_zip',
                    country: 'test_country'
                },
                retained: true,
                email: 'test_email',
                metadata: {
                    test_key: 'test_value'
                }
            };
            const response = await service.paymentMethods.createGooglePay(googlePayInput);
            expect(response).toBeDefined();
            expect(response.transaction).toBeDefined();
            expect(response.transaction.token).toBeDefined();
            expect(response.transaction.created_at).toBeDefined();
            expect(response.transaction.updated_at).toBeDefined();
            expect(response.transaction.succeeded).toBe(true);
            expect(response.transaction.transaction_type).toBeDefined();
            expect(response.transaction.retained).toBe(true);
            expect(response.transaction.state).toBeDefined();
            expect(response.transaction.message_key).toBeDefined();
            expect(response.transaction.message).toBeDefined();
            expect(response.transaction.payment_method).toBeDefined();
            expect(response.transaction.payment_method.token).toBeDefined();
            expect(response.transaction.payment_method.created_at).toBeDefined();
            expect(response.transaction.payment_method.updated_at).toBeDefined();
            expect(response.transaction.payment_method.email).toBeDefined();
            expect(response.transaction.payment_method.data).toBeNull();
            expect(response.transaction.payment_method.storage_state).toBeDefined();
            expect(response.transaction.payment_method.test).toBe(true);
            expect(response.transaction.payment_method.metadata).toBeNull();
            expect(response.transaction.payment_method.last_four_digits).toBeDefined();
            expect(response.transaction.payment_method.first_six_digits).toBeDefined();
            expect(response.transaction.payment_method.card_type).toBeDefined();
            expect(response.transaction.payment_method.first_name).toBeDefined();
            expect(response.transaction.payment_method.last_name).toBeDefined();
            expect(response.transaction.payment_method.month).toBeDefined();
            expect(response.transaction.payment_method.year).toBeDefined();
            expect(response.transaction.payment_method.full_name).toBeDefined();
            expect(response.transaction.payment_method.address1).toBeNull();
            expect(response.transaction.payment_method.address2).toBeNull();
            expect(response.transaction.payment_method.city).toBeNull();
            expect(response.transaction.payment_method.state).toBeNull();
            expect(response.transaction.payment_method.zip).toBeNull();
            expect(response.transaction.payment_method.country).toBeNull();
            expect(response.transaction.payment_method.phone_number).toBeNull();
            expect(response.transaction.payment_method.company).toBeNull();
            expect(response.transaction.payment_method.shipping_address1).toBeNull();
            expect(response.transaction.payment_method.shipping_address2).toBeNull();
            expect(response.transaction.payment_method.shipping_city).toBeNull();
            expect(response.transaction.payment_method.shipping_state).toBeNull();
            expect(response.transaction.payment_method.shipping_zip).toBeNull();
            expect(response.transaction.payment_method.shipping_country).toBeNull();
            expect(response.transaction.payment_method.shipping_phone_number).toBeNull();
            expect(response.transaction.payment_method.issuer_identification_number).toBeDefined();
            expect(response.transaction.payment_method.payment_method_type).toBeDefined();
            expect(response.transaction.payment_method.google_pay_type).toBeDefined();
            expect(response.transaction.payment_method.errors).toBeDefined();
        });
    });

    describe('verify', () => {
        it('should verify a payment method', async () => {
            const response = await service.verify('paymentMethodToken');
            expect(response).toBeDefined();
        });
    });

    describe('capture', () => {
        it('should capture full amount', async () => {
            const response = await service.capture.fullAmount('transactionToken');
            expect(response).toBeDefined();
        });

        it('should capture partial amount', async () => {
            const response = await service.capture.partialAmount('transactionToken', 100);
            expect(response).toBeDefined();
        });
    });

    describe('deliver', () => {
        it('should deliver a payment method', async () => {
            const response = await service.deliver('paymentMethodToken', 'receiverToken', {});
            expect(response).toBeDefined();
        });
    });
});
