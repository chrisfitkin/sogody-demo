/*
6. Demonstrate our nicely typed API service wrapper

Prompt:
Import and demonstrate usage of the service in spreedlyService3.ts

Prompt:
Use the response from createGooglePay to deliver the payment
to a receiver
*/

import { SpreedlyService } from "./spreedlyService3";

const service = new SpreedlyService("environmentKey", "accessSecret");

const createGooglePayRequest = {
  payment_method: {
    google_pay: {
      test_card_number: "test", // add this
      first_name: "test", // add this
      last_name: "test", // add this
      payment_data: {
        signature: "test",
        protocolVersion: "test",
        signedMessage: "test",
      },
    },
    credit_card: {
      first_name: "test",
      last_name: "test",
    },
    email: "test@test.com",
  },
};

service
  .createGooglePay(createGooglePayRequest)
  .then((response) => {
    console.log(response);
    return service.deliver("receiver_token", "json", {
      delivery: {
        payment_method_token: response.transaction.token,
        url: "https://example.com", // replace with actual URL
        body: "example body", // replace with actual body
      },
    });
  })
  .then((deliveryResponse) => console.log(deliveryResponse))
  .catch((error) => console.error(error));
