# Spreedly Service

This service provides methods to interact with the Spreedly API. Here is a list of available methods:

- `httpRequest(path: string, body: any)`: Makes a HTTP request to the specified path with the provided body.
- `createGooglePay(paymentData: object)`: Creates a Google Pay payment method with the provided payment data.
- `isCreateGooglePayResponse(response: any)`: Checks if the response is a valid Google Pay creation response.
- `isPaymentMethodResponse(response: any)`: Checks if the response is a valid payment method response.
- `deliverPaymentToken(receiverToken, paymentMethodToken)`: Delivers a payment token to a receiver.
- `createCreditCard(creditCardData: object)`: Creates a credit card payment method with the provided credit card data.
- `createApplePay(applePayData: object)`: Creates an Apple Pay payment method with the provided Apple Pay data.
- `listPayments()`: Lists all payment methods.
- `showPayment(paymentToken: string)`: Shows a specific payment method.

## Usage Example
```javascript
import spreedlyService from './spreedlyService';

async function main() {
  // Create a Google Pay payment method
  const googlePayData = { /* your Google Pay data here */ };
  const googlePayResponse = await spreedlyService.createGooglePay(googlePayData);
  console.log(googlePayResponse);

  // Create a credit card payment method
  const creditCardData = { /* your credit card data here */ };
  const creditCardResponse = await spreedlyService.createCreditCard(creditCardData);
  console.log(creditCardResponse);

  // List all payment methods
  const payments = await spreedlyService.listPayments();
  console.log(payments);

  // Show a specific payment method
  const paymentToken = 'your-payment-token-here';
  const payment = await spreedlyService.showPayment(paymentToken);
  console.log(payment);
}
main();
```
