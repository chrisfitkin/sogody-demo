// type GooglePayPaymentMethod = {
//   payment_method: {
//     Google_pay: {
//       payment_data: string;
//       test_card_number?: string;
//       first_name?: string;
//       last_name?: string;
//       address1?: string;
//       address2?: string;
//       city?: string;
//       state?: string;
//       zip?: string;
//       country?: string;
//     };
//     retained?: boolean;
//     email?: string;
//     metadata?: Record<string, string>;
//   };
// };

// type GooglePayResponse = {
//   transaction: {
//     token: string;
//     succeeded: boolean;
//     retained: boolean;
//     payment_method: {
//       token: string;
//       storage_state: string;
//       test: boolean;
//       payment_method_type: string;
//       errors?: string[];
//       last_four_digits: string;
//       first_six_digits: string;
//       issuer_identification_number: string;
//       month: string;
//       year: string;
//     };
//   };
// };

// type Delivery = {
//   continue_caching?: boolean;
//   payment_method_token: string;
//   url: string;
//   request_method?: 'PUT' | 'PATCH' | 'POST';
//   headers?: string;
//   body: string;
//   encode_response?: boolean;
//   sub_merchant_key?: string;
// };

// type DeliverResponse = {
//   transaction: {
//     token: string;
//     succeeded: boolean;
//     message: string;
//     response: {
//       status: number;
//       headers: string;
//       body: string;
//     };
//     receiver: any; // Replace with actual type
//     payment_method: any; // Replace with actual type
//     sub_merchant_key?: string;
//   };
// };