/*
1. Scaffold Service Bolierplate

Prompt:
Using https://docs.spreedly.com/reference/api/v1/ docs create a spreedlyService API wrapper
that implements methods for paymentMethods.createGooglePay and deliver Spreedly endpoints
*/

/*
2. Remove dependencies

Prompt:
Remove axios dependency and refactor using native node functionality
*/

/*
3. Refactor for abstraction & maintainability

Prompt:
Refactor the request logic and error handling out of the createGooglePay and deliver methods
into a shared class function
*/
import https from 'https';

export class SpreedlyService {
    auth: string;
    baseUrl: string;

    constructor(environmentKey: string, accessSecret: string) {
        this.auth = `${environmentKey}:${accessSecret}`;
        this.baseUrl = 'https://core.spreedly.com/v1';
    }

    async makeRequest(path: string, method: string, body: any) {
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

    async createGooglePay(input: any) {
        return this.makeRequest('/payment_methods', 'POST', {
            payment_method: {
                google_pay: input.google_pay
            }
        });
    }

    async deliver(endpoint: string, body: any) {
        return this.makeRequest(`/deliveries/${endpoint}`, 'POST', body);
    }
}
