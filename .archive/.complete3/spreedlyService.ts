import https from "https";

export class SpreedlyService {
  client: any; // Declare the client property

  constructor() {
    this.client = {
      baseURL: "https://core.spreedly.com/v1",
      headers: {
        Authorization: "Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==",
        "Content-Type": "application/json",
      },
      post: (path, data) => {
        return new Promise((resolve, reject) => {
          const options = {
            hostname: this.client.baseURL,
            path: path,
            method: "POST",
            headers: this.client.headers,
          };

          const req = https.request(options, (res) => {
            res.setEncoding("utf8");
            let rawData = "";
            res.on("data", (chunk) => {
              rawData += chunk;
            });
            res.on("end", () => {
              resolve(JSON.parse(rawData));
            });
          });

          req.on("error", (e) => {
            reject(e);
          });

          req.write(JSON.stringify(data));
          req.end();
        });
      },
    };
  }

  async createGooglePay(paymentMethod: {
    payment_method: {
      Google_pay: {
        payment_data: string;
        test_card_number?: string;
        first_name?: string;
        last_name?: string;
        address1?: string;
        address2?: string;
        city?: string;
        state?: string;
        zip?: string;
        country?: string;
      };
      retained?: boolean;
      email?: string;
      metadata?: Record<string, string>;
    };
  }): Promise<GooglePayResponse> {
    const response = await this.client.post("/payment_methods", paymentMethod);
    if (!(response.data && response.data.transaction && response.data.transaction.token && response.data.transaction.succeeded && response.data.transaction.retained && response.data.transaction.payment_method)) {
      throw new Error("Response data is not in the expected shape");
    }
    return response.data;
  }

  async deliver(paymentMethodToken: string, receiverToken: string, delivery: Delivery): Promise<DeliverResponse> {
    const response = await this.client.post(
      `/receivers/${receiverToken}/deliver`,
      {
        delivery: {
          ...delivery,
          payment_method_token: paymentMethodToken,
        },
      }
    );
    return response.data;
  }

  async createCreditCard(paymentMethod: {
    payment_method: {
      credit_card: {
        first_name: string;
        last_name: string;
        number: string;
        verification_value: string;
        month: string;
        year: string;
        company: string;
        address1: string;
        address2: string;
        city: string;
        state: string;
        zip: string;
        country: string;
        phone_number: string;
        shipping_address1: string;
        shipping_address2: string;
        shipping_city: string;
        shipping_state: string;
        shipping_zip: string;
        shipping_country: string;
        shipping_phone_number: string;
      };
      email: string;
      metadata: Record<string, string>;
    };
  }): Promise<CreditCardResponse> {
    const response = await this.client.post("/payment_methods", paymentMethod);
    return response.data;
  }

  async createApplePay(paymentMethod: {
    payment_method: {
      apple_pay: {
        payment_data: string;
      };
      email: string;
      metadata: Record<string, string>;
    };
  }): Promise<ApplePayResponse> {
    const response = await this.client.post("/payment_methods", paymentMethod);
    return response.data;
  }

  async listPayments(): Promise<PaymentListResponse> {
    const response = await this.client.get("/payment_methods");
    return response.data;
  }

  async showPayment(paymentMethodToken: string): Promise<PaymentResponse> {
    const response = await this.client.get(`/payment_methods/${paymentMethodToken}`);
    return response.data;
  }

  async captureFullAmount(transactionToken: string): Promise<TransactionResponse> {
    const response = await this.client.post(`/transactions/${transactionToken}/capture`);
    return response.data;
  }

  async capturePartialAmount(transactionToken: string, amount: number): Promise<TransactionResponse> {
    const response = await this.client.post(`/transactions/${transactionToken}/capture`, {
      transaction: {
        amount: amount
      }
    });
    return response.data;
  }
}

export default new SpreedlyService();
