// type CreateGooglePayResponse = {
//     transaction: {
//         token: string;
//         created_at: string;
//         updated_at: string;
//         succeeded: boolean;
//         transaction_type: string;
//         retained: boolean;
//         state: string;
//         message_key: string;
//         message: string;
//         payment_method: {
//             token: string;
//             created_at: string;
//             updated_at: string;
//             email: string;
//             data: null;
//             storage_state: string;
//             test: boolean;
//             metadata: null;
//             last_four_digits: string;
//             first_six_digits: string;
//             card_type: string;
//             first_name: string;
//             last_name: string;
//             month: number;
//             year: number;
//             full_name: string;
//             address1: null;
//             address2: null;
//             city: null;
//             state: null;
//             zip: null;
//             country: null;
//             phone_number: null;
//             company: null;
//             shipping_address1: null;
//             shipping_address2: null;
//             shipping_city: null;
//             shipping_state: null;
//             shipping_zip: null;
//             shipping_country: null;
//             shipping_phone_number: null;
//             issuer_identification_number: string;
//             payment_method_type: string;
//             google_pay_type: string;
//             errors: any[];
//         };
//     };
// };


// type CreateGooglePayInput = {
//       google_pay: {
//         payment_data: {
//           signature: string;
//           protocolVersion: string;
//           signedMessage: string;
//         };
//         first_name: string;
//         last_name: string;
//         test_card_number: string;
//         address1?: string;
//         address2?: string;
//         city?: string;
//         state?: string;
//         zip?: string;
//         country?: string;
//       };
//       retained?: boolean;
//       email: string;
//       metadata?: Record<string, string>;
//   };