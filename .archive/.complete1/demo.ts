import { SpreedlyService } from "./spreedlyService";

const spreedlyService = new SpreedlyService(
  "yourEnvironmentKey",
  "yourAccessSecret"
);

const sampleInput: CreateGooglePayInput = {
  google_pay: {
    payment_data: {
      signature: "sampleSignature",
      protocolVersion: "sampleProtocolVersion",
      signedMessage: "sampleSignedMessage",
    },
    first_name: "John",
    last_name: "Doe",
    test_card_number: "4111111111111111",
  },
  email: "john.doe@example.com", // Add this line
};

const response = await spreedlyService.paymentMethods.createGooglePay(
  sampleInput
);
const result = response.transaction.succeeded;
