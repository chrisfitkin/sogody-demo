<!--
Write the documentation for the Spreedly Service API wrapper in @spreedlyService4.ts 
referencing spreedlyService.test.ts and demo.ts
including a bullet list of ## Methods and a ## Usage example
-->
## Spreedly Service API Wrapper

This API wrapper provides a set of methods to interact with the Spreedly Service. 

## Methods

- `createGooglePay(input: CreateGooglePayRequest): Promise<CreateGooglePayResponse>`
- `deliver(receiver_token: string, format: 'json' | 'xml', body: DeliverRequest): Promise<DeliverResponse>`
- `createCreditCard(input: CreateCreditCardRequest): Promise<CreateCreditCardResponse>`
- `createApplePay(input: CreateApplePayRequest): Promise<CreateApplePayResponse>`
- `listPayments(): Promise<ListPaymentsResponse>`
- `showPayment(payment_token: string): Promise<ShowPaymentResponse>`
- `captureFullAmount(transaction_token: string, body: CaptureFullAmountRequest): Promise<CaptureFullAmountResponse>`
- `capturePartialAmount(transaction_token: string, body: CapturePartialAmountRequest): Promise<CapturePartialAmountResponse>`
- `createHTTPReceiver(input: CreateHTTPReceiverRequest): Promise<CreateHTTPReceiverResponse>`
- `showReceiver(receiver_token: string): Promise<ShowReceiverResponse>`
- `updateReceiver(receiver_token: string, input: UpdateReceiverRequest): Promise<UpdateReceiverResponse>`

## Usage Example

Here is an example of how to use the `createGooglePay` method:

```typescript
import { SpreedlyService } from "./spreedlyService4";

const service = new SpreedlyService("environmentKey", "accessSecret");

const createGooglePayRequest = {
  payment_method: {
    google_pay: {
      test_card_number: "test",
      first_name: "test",
      last_name: "test",
      payment_data: {
        signature: "test",
        protocolVersion: "test",
        signedMessage: "test",
      },
    },
    email: "test@test.com",
  },
};

service
  .createGooglePay(createGooglePayRequest)
  .then((response) => {
    console.log(response);
  })
  .catch((error) => console.error(error));
```


