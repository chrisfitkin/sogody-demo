import { request } from "https";

export class SpreedlyService {
  private options: any;

  constructor() {
    this.options = {
      hostname: "core.spreedly.com",
      port: 443,
      path: "/v1",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: "Basic QWxhZGRpbjpvcGVuIHNlc2FtZQ==",
      },
    };
  }

  async httpRequest(path: string, body: any) {
    this.options.path = path;
    return new Promise((resolve, reject) => {
      const req = request(this.options, (res) => {
        let data = "";
        res.on("data", (chunk) => (data += chunk));
        res.on("end", () => {
          try {
            resolve(JSON.parse(data));
          } catch (error) {
            reject(error);
          }
        });
      });
      req.write(JSON.stringify(body));
      req.end();
    });
  }

  async createGooglePay(paymentData: {
    payment_data: string;
    test_card_number?: string;
    first_name?: string;
    last_name?: string;
    address1?: string;
    address2?: string;
    city?: string;
  }): Promise<CreateGooglePayResponse> {
    const response = await this.httpRequest("/v1/payment_methods", {
      payment_method: { google_pay: paymentData },
    });
    if (this.isCreateGooglePayResponse(response)) {
      return response;
    } else {
      throw new Error("Invalid response format");
    }
  }

  private isCreateGooglePayResponse(
    response: any
  ): response is CreateGooglePayResponse {
    return (
      response &&
      response.transaction &&
      typeof response.transaction.token === "string" &&
      typeof response.transaction.succeeded === "boolean" &&
      typeof response.transaction.retained === "boolean" &&
      this.isPaymentMethodResponse(response.transaction.payment_method)
    );
  }

  private isPaymentMethodResponse(
    response: any
  ): response is PaymentMethodResponse {
    return (
      response &&
      typeof response.token === "string" &&
      typeof response.storage_state === "string" &&
      typeof response.test === "boolean" &&
      typeof response.payment_method_type === "string"
    );
  }

  async deliverPaymentToken(receiverToken, paymentMethodToken) {
    return this.httpRequest(`/v1/receivers/${receiverToken}/deliver`, {
      delivery: { payment_method_token: paymentMethodToken },
    });
  }

  async createCreditCard(creditCardData: {
    card_number: string;
    month: string;
    year: string;
    first_name: string;
    last_name: string;
  }): Promise<CreateCreditCardResponse> {
    const response = await this.httpRequest("/v1/payment_methods", {
      payment_method: { credit_card: creditCardData },
    });
    if (this.isCreateCreditCardResponse(response)) {
      return response;
    } else {
      throw new Error("Invalid response format");
    }
  }

  async createApplePay(applePayData: {
    payment_data: string;
    first_name: string;
    last_name: string;
  }): Promise<CreateApplePayResponse> {
    const response = await this.httpRequest("/v1/payment_methods", {
      payment_method: { apple_pay: applePayData },
    });
    if (this.isCreateApplePayResponse(response)) {
      return response;
    } else {
      throw new Error("Invalid response format");
    }
  }

  async listPayments(): Promise<ListPaymentsResponse> {
    const response = await this.httpRequest("/v1/payment_methods");
    if (this.isListPaymentsResponse(response)) {
      return response;
    } else {
      throw new Error("Invalid response format");
    }
  }

  async showPayment(paymentToken: string): Promise<ShowPaymentResponse> {
    const response = await this.httpRequest(`/v1/payment_methods/${paymentToken}`);
    if (this.isShowPaymentResponse(response)) {
      return response;
    } else {
      throw new Error("Invalid response format");
    }
  }
}

export default new SpreedlyService();
