// // Request Types
// interface GooglePayPaymentData {
//     signature: string;
//     protocolVersion: string;
//     signedMessage: string;
//   }
  
//   interface GooglePayPaymentMethod {
//     payment_data: GooglePayPaymentData;
//     test_card_number: string;
//     first_name: string;
//     last_name: string;
//     address1?: string;
//     address2?: string;
//     city?: string;
//     state?: string;
//     zip?: string;
//     country?: string;
//   }  

//   interface CreateGooglePayRequest {
//     payment_method: {
//       google_pay: GooglePayPaymentMethod;
//       email: string;
//       retained?: boolean;
//       metadata?: Record<string, string>;
//     };
//   }
  
//   // Response Types
//   interface GooglePayPaymentMethodResponse {
//     token: string;
//     created_at: string;
//     updated_at: string;
//     email: string;
//     data: null;
//     storage_state: string;
//     test: boolean;
//     metadata: null;
//     last_four_digits: string;
//     first_six_digits: string;
//     card_type: string;
//     first_name: string;
//     last_name: string;
//     month: number;
//     year: number;
//     full_name: string;
//     address1: null;
//     address2: null;
//     city: null;
//     state: null;
//     zip: null;
//     country: null;
//     phone_number: null;
//     company: null;
//     shipping_address1: null;
//     shipping_address2: null;
//     shipping_city: null;
//     shipping_state: null;
//     shipping_zip: null;
//     shipping_country: null;
//     shipping_phone_number: null;
//     issuer_identification_number: string;
//     payment_method_type: string;
//     google_pay_type: string;
//     errors: any[];
//   }
  
//   interface CreateGooglePayResponse {
//     transaction: {
//       token: string;
//       created_at: string;
//       updated_at: string;
//       succeeded: boolean;
//       transaction_type: string;
//       retained: boolean;
//       state: string;
//       message_key: string;
//       message: string;
//       payment_method: GooglePayPaymentMethodResponse;
//     };
//   }
  
//   type DeliverRequest = {
//     delivery: {
//         payment_method_token: string;
//         url: string;
//         headers?: string;
//         body: string;
//     }
// }

// type DeliverResponse = {
//     transaction: {
//         token: string;
//         transaction_type: string;
//         state: string;
//         created_at: string;
//         updated_at: string;
//         succeeded: boolean;
//         message: string;
//         url: string;
//         response: {
//             status: number;
//             headers: string;
//             body: string;
//         };
//         receiver: {
//             company_name: string;
//             receiver_type: string;
//             token: string;
//             hostnames: string;
//             state: string;
//             created_at: string;
//             updated_at: string;
//             credentials: Array<{
//                 name: string;
//                 value: string;
//                 safe: string;
//             }>;
//         };
//         payment_method: {
//             token: string;
//             created_at: string;
//             updated_at: string;
//             email: string;
//             data: object;
//             storage_state: string;
//             test: boolean;
//             metadata: object;
//             last_four_digits: string;
//             first_six_digits: string;
//             card_type: string;
//             first_name: string;
//             last_name: string;
//             month: number;
//             year: number;
//             full_name: string;
//             eligible_for_card_updater: boolean;
//             payment_method_type: string;
//             bin_metadata: object;
//             errors: Array<any>;
//             fingerprint: string;
//             verification_value: string;
//             number: string;
//         };
//     }
// }