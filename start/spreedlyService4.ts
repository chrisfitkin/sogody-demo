/*

6. Expand service capabilities

Prompt:
Add methods for createCreditCard, createApplePay, listPayments, showPayment, 
Add methods for captureFullAmount, capturePartialAmount
Add methods for createHTTPReceiver, showReciver, updateReciver 

*/

import https from 'https';

export class SpreedlyService {
    auth: string;
    baseUrl: string;

    constructor(environmentKey: string, accessSecret: string) {
        this.auth = `${environmentKey}:${accessSecret}`;
        this.baseUrl = 'https://core.spreedly.com/v1';
    }

    async makeRequest(path: string, method: string, body: any): Promise<{transaction?: object}> {
        const options = {
            hostname: this.baseUrl,
            path: path,
            method: method,
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Basic ${Buffer.from(this.auth).toString('base64')}`
            }
        };

        return new Promise((resolve, reject) => {
            const req = https.request(options, (res) => {
                let data = '';

                res.on('data', (chunk) => {
                    data += chunk;
                });

                res.on('end', () => {
                    resolve(JSON.parse(data));
                });
            });

            req.on('error', (error) => {
                reject(error);
            });

            req.write(JSON.stringify(body));
            req.end();
        });
    }

    async createGooglePay(input: CreateGooglePayRequest): Promise<CreateGooglePayResponse> {
        const response = await this.makeRequest('/payment_methods', 'POST', input);
        if ('transaction' in response && response.transaction && 'token' in response.transaction) {
            return response as CreateGooglePayResponse;
        } else {
            throw new Error('Response does not match expected type CreateGooglePayResponse');
        }
    }
    async deliver(receiver_token: string, format: 'json' | 'xml', body: DeliverRequest): Promise<DeliverResponse> {
        const response = await this.makeRequest(`/receivers/${receiver_token}/deliveries.${format}`, 'POST', body);
        if ('transaction' in response && response.transaction && 'token' in response.transaction) {
            return response as DeliverResponse;
        } else {
            throw new Error('Response does not match expected type DeliverResponse');
        }
    }
    async createCreditCard(input: CreateCreditCardRequest): Promise<CreateCreditCardResponse> {
        const response = await this.makeRequest('/payment_methods', 'POST', input);
        if ('transaction' in response && response.transaction && 'token' in response.transaction) {
            return response as CreateCreditCardResponse;
        } else {
            throw new Error('Response does not match expected type CreateCreditCardResponse');
        }
    }
    async createApplePay(input: CreateApplePayRequest): Promise<CreateApplePayResponse> {
        const response = await this.makeRequest('/payment_methods', 'POST', input);
        if ('transaction' in response && response.transaction && 'token' in response.transaction) {
            return response as CreateApplePayResponse;
        } else {
            throw new Error('Response does not match expected type CreateApplePayResponse');
        }
    }
    async listPayments(): Promise<ListPaymentsResponse> {
        const response = await this.makeRequest('/payment_methods', 'GET', {});
        if ('transaction' in response && response.transaction && 'token' in response.transaction) {
            return response as ListPaymentsResponse;
        } else {
            throw new Error('Response does not match expected type ListPaymentsResponse');
        }
    }
    async showPayment(payment_token: string): Promise<ShowPaymentResponse> {
        const response = await this.makeRequest(`/payment_methods/${payment_token}`, 'GET', {});
        if ('transaction' in response && response.transaction && 'token' in response.transaction) {
            return response as ShowPaymentResponse;
        } else {
            throw new Error('Response does not match expected type ShowPaymentResponse');
        }
    }
    async captureFullAmount(transaction_token: string, body: CaptureFullAmountRequest): Promise<CaptureFullAmountResponse> {
        const response = await this.makeRequest(`/transactions/${transaction_token}/capture`, 'POST', body);
        if ('transaction' in response && response.transaction && 'token' in response.transaction) {
            return response as CaptureFullAmountResponse;
        } else {
            throw new Error('Response does not match expected type CaptureFullAmountResponse');
        }
    }
    async capturePartialAmount(transaction_token: string, body: CapturePartialAmountRequest): Promise<CapturePartialAmountResponse> {
        const response = await this.makeRequest(`/transactions/${transaction_token}/capture`, 'POST', body);
        if ('transaction' in response && response.transaction && 'token' in response.transaction) {
            return response as CapturePartialAmountResponse;
        } else {
            throw new Error('Response does not match expected type CapturePartialAmountResponse');
        }
    }
    async createHTTPReceiver(input: CreateHTTPReceiverRequest): Promise<CreateHTTPReceiverResponse> {
        const response = await this.makeRequest('/receivers', 'POST', input);
        if ('receiver' in response && response.receiver && 'token' in response.receiver) {
            return response as CreateHTTPReceiverResponse;
        } else {
            throw new Error('Response does not match expected type CreateHTTPReceiverResponse');
        }
    }
    async showReceiver(receiver_token: string): Promise<ShowReceiverResponse> {
        const response = await this.makeRequest(`/receivers/${receiver_token}`, 'GET', {});
        if ('receiver' in response && response.receiver && 'token' in response.receiver) {
            return response as ShowReceiverResponse;
        } else {
            throw new Error('Response does not match expected type ShowReceiverResponse');
        }
    }
    async updateReceiver(receiver_token: string, input: UpdateReceiverRequest): Promise<UpdateReceiverResponse> {
        const response = await this.makeRequest(`/receivers/${receiver_token}`, 'PUT', input);
        if ('receiver' in response && response.receiver && 'token' in response.receiver) {
            return response as UpdateReceiverResponse;
        } else {
            throw new Error('Response does not match expected type UpdateReceiverResponse');
        }
    }
}