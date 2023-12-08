export class SpreedlyService {
    auth: string;
    baseUrl: string;

    constructor(environmentKey: string, accessSecret: string) {
        this.auth = `${environmentKey}:${accessSecret}`;
        this.baseUrl = 'https://core.spreedly.com/v1';
    }

    async makeRequest(url: string, method: string, data: any): Promise<any> {
        const response = await fetch(url, {
            method: method,
            headers: {
                'Authorization': `Basic ${btoa(this.auth)}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        });

        return response.json();
    }

    paymentMethods = {
        createApplePay: async (applePayToken: string): Promise<any> => {
            const url = `${this.baseUrl}/payment_methods.json`;
            const data = {
                payment_method: {
                    apple_pay: applePayToken,
                    retain_on_success: true
                }
            };

            return this.makeRequest(url, 'POST', data);
        },
        createCreditCard: async (creditCardData: any): Promise<any> => {
            const url = `${this.baseUrl}/payment_methods.json`;
            const data = {
                payment_method: {
                    credit_card: creditCardData,
                    retain_on_success: true
                }
            };

            return this.makeRequest(url, 'POST', data);
        },
        createGooglePay: async (input: CreateGooglePayInput): Promise<CreateGooglePayResponse> => {
            const url = `${this.baseUrl}/payment_methods.json`;
            const data = {
                payment_method: {
                    ...input,
                    retain_on_success: true
                }
            };

            return this.makeRequest(url, 'POST', data);
        }
    }

    verify = async (paymentMethodToken: string): Promise<any> => {
        const url = `${this.baseUrl}/payment_methods/${paymentMethodToken}/verify.json`;

        return this.makeRequest(url, 'POST', {});
    }

    capture = {
        fullAmount: async (transactionToken: string): Promise<any> => {
            const url = `${this.baseUrl}/transactions/${transactionToken}/capture.json`;

            return this.makeRequest(url, 'POST', {});
        },
        partialAmount: async (transactionToken: string, amount: number): Promise<any> => {
            const url = `${this.baseUrl}/transactions/${transactionToken}/capture.json`;
            const data = {
                transaction: {
                    amount: amount
                }
            };

            return this.makeRequest(url, 'POST', data);
        }
    }

    deliver = async (paymentMethodToken: string, receiverToken: string, data: any): Promise<any> => {
        const url = `${this.baseUrl}/receivers/${receiverToken}/deliver.json`;
        const payload = {
            delivery: {
                payment_method_token: paymentMethodToken,
                url: data.url,
                headers: data.headers,
                body: data.body
            }
        };

        return this.makeRequest(url, 'POST', payload);
    }
}

