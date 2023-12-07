/*
4. Add better TypeScript Types

Chat Prompt:
https://docs.spreedly.com/reference/api/v1/ 
Write typescript types for the createGooglePay function that includes all Request Body parameters
and Response Body parameters from the Create Google Pay specs and example
(copy from docs)

Prompt: Add types to this method from index.d.ts
Prompt: Add guard method to test for expected Response type
Prompt: Add return type to this method that will be an object which may contain the property "transaction" with value of an object

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

    async deliver(endpoint: string, body: any) {
        return this.makeRequest(`/deliveries/${endpoint}`, 'POST', body);
    }
}
