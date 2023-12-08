import { SpreedlyService } from './spreedlyService';

describe('SpreedlyService', () => {
  let service: SpreedlyService;

  beforeEach(() => {
    service = new SpreedlyService();
  });

  it('should be an instance of SpreedlyService', () => {
    expect(service).toBeInstanceOf(SpreedlyService);
  });

  describe('createGooglePay', () => {
    it('should create a Google Pay payment method', async () => {
      const paymentMethod = {
        payment_method: {
          Google_pay: {
            payment_data: 'test_data',
            test_card_number: '1234567890123456',
            first_name: 'Test',
            last_name: 'User',
            address1: '123 Test St',
            address2: 'Apt 4',
            city: 'Testville',
            state: 'TS',
            zip: '12345',
            country: 'Testland',
          },
          retained: true,
          email: 'test@test.com',
          metadata: {
            test: 'data',
          },
        },
      };

      const response: GooglePayResponse = await service.createGooglePay(paymentMethod);

      expect(response).toBeDefined();
      expect(response.transaction.succeeded).toBe(true);
    });

    it('should throw an error when payment data is missing', async () => {
      const paymentMethod = {
        payment_method: {
          Google_pay: {
            test_card_number: '1234567890123456',
            first_name: 'Test',
            last_name: 'User',
            address1: '123 Test St',
            address2: 'Apt 4',
            city: 'Testville',
            state: 'TS',
            zip: '12345',
            country: 'Testland',
          },
          retained: true,
          email: 'test@test.com',
          metadata: {
            test: 'data',
          },
        },
      };

      await expect(service.createGooglePay(paymentMethod as any)).rejects.toThrow();
    });

    it('should throw an error when paymentMethod object is malformed or empty', async () => {
      const malformedPaymentMethod = {
        payment_method: {
          Google_pay: {
            payment_data: 123, // Malformed data, should be string
          },
        },
      };

      const emptyPaymentMethod = {}; // Empty object

      await expect(service.createGooglePay(malformedPaymentMethod as any)).rejects.toThrow();
      await expect(service.createGooglePay(emptyPaymentMethod as any)).rejects.toThrow();
    });
  });

  describe('deliver', () => {
    it('should deliver a payment method', async () => {
      const paymentMethodToken = 'test_token';
      const receiverToken = 'test_receiver_token';
      const delivery = {
        continue_caching: true,
        payment_method_token: 'test_payment_method_token',
        url: 'https://test.com',
        request_method: 'POST' as 'POST', // Explicitly cast to allowed type
        headers: 'test_headers',
        body: 'test_body',
      };

      const response: DeliverResponse = await service.deliver(paymentMethodToken, receiverToken, delivery);

      expect(response).toBeDefined();
    });
  });
});
