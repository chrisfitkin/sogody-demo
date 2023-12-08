// Input type
interface GooglePayPaymentData {
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
}

interface GooglePayPaymentMethod {
  google_pay: GooglePayPaymentData;
}

interface CreateGooglePayInput {
  payment_method: GooglePayPaymentMethod;
  retained?: boolean;
  email?: string;
  metadata?: Record<string, string>;
}

// Response type
interface PaymentMethodResponse {
  token: string;
  storage_state: string;
  test: boolean;
  payment_method_type: string;
  errors?: any[];
  last_four_digits: string;
  first_six_digits: string;
  issuer_identification_number: string;
  month: string;
  year: string;
}

interface CreateGooglePayResponse {
  transaction: {
    token: string;
    succeeded: boolean;
    retained: boolean;
    payment_method: PaymentMethodResponse;
  };
}