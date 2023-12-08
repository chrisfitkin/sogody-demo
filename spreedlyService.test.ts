import { SpreedlyService } from './spreedlyService';

describe('SpreedlyService', () => {
  let service: SpreedlyService;
  let mockPaymentData: GooglePayPaymentData;
  let mockResponse: CreateGooglePayResponse;

  beforeEach(() => {
    service = new SpreedlyService();
    mockPaymentData = {
      payment_data: 'test_data',
      test_card_number: '1234567890123456',
      first_name: 'Test',
      last_name: 'User',
      signature: 'test_signature',
      protocolVersion: 'test_protocolVersion',
      signedMessage: 'test_signedMessage',
      address1: '123 Test St',
      address2: 'Apt 4B',
      city: 'Testville',
    };
    mockResponse = {
      transaction: {
        token: 'test_token',
        succeeded: true,
        retained: true,
        payment_method: {
          token: 'test_token',
          storage_state: 'cached',
          test: true,
          payment_method_type: 'Google Pay',
          created_at: '2022-01-01T00:00:00Z',
          updated_at: '2022-01-01T00:00:00Z',
          email: 'test@example.com',
          data: {} as any,
          // Add the remaining 27 properties here
        } as any,
      } as any,
    };
  });

  it('should instantiate SpreedlyService of the right type', () => {
    expect(service).toBeInstanceOf(SpreedlyService);
  });

  it('should create Google Pay', async () => {
    jest.spyOn(service, 'httpRequest').mockResolvedValue(mockResponse);
    const result = await service.createGooglePay(mockPaymentData);
    expect(result).toEqual(mockResponse);
  });

  it('should throw error for missing data', async () => {
    const incompleteData = { ...mockPaymentData, payment_data: undefined };
    await expect(service.createGooglePay(incompleteData as any)).rejects.toThrow('Invalid response format');
  });

  it('should throw error for malformed data', async () => {
    const malformedData = { ...mockPaymentData, payment_data: 'malformed_data' };
    await expect(service.createGooglePay(malformedData)).rejects.toThrow('Invalid response format');
  });

  it('should throw error for empty request', async () => {
    await expect(service.createGooglePay({} as GooglePayPaymentData)).rejects.toThrow('Invalid response format');
  });

  it('should throw error for invalid response format', async () => {
    jest.spyOn(service, 'httpRequest').mockResolvedValue({});
    await expect(service.createGooglePay(mockPaymentData)).rejects.toThrow('Invalid response format');
  });
});
