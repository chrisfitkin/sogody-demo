# Spreedly Service API Wrapper

This is a wrapper for the Spreedly API. It provides methods to interact with the Spreedly API in a more convenient and structured way.

## Methods

- `createGooglePay(paymentMethod)`: Creates a Google Pay payment method.
- `deliver(paymentMethodToken, receiverToken, delivery)`: Delivers a payment method to a receiver.
- `createCreditCard(paymentMethod)`: Creates a Credit Card payment method.
- `createApplePay(paymentMethod)`: Creates an Apple Pay payment method.
- `listPayments()`: Lists all payment methods.
- `showPayment(paymentMethodToken)`: Shows a specific payment method.
- `captureFullAmount(transactionToken)`: Captures the full amount of a transaction.
- `capturePartialAmount(transactionToken, amount)`: Captures a partial amount of a transaction.

## Usage Example
```javascript
const spreedlyService = require('./spreedlyService');

async function main() {
  // Create a Google Pay payment method
  const googlePay = await spreedlyService.createGooglePay({
    payment_method: {
      Google_pay: {
        payment_data: 'test_payment_data',
        first_name: 'John',
        last_name: 'Doe',
      },
    },
  });

  // List all payment methods
  const payments = await spreedlyService.listPayments();

  // Show a specific payment method
  const payment = await spreedlyService.showPayment(googlePay.paymentMethodToken);

  // Capture the full amount of a transaction
  const captureFull = await spreedlyService.captureFullAmount('test_transaction_token');

  // Capture a partial amount of a transaction
  const capturePartial = await spreedlyService.capturePartialAmount('test_transaction_token', 50);
}

main().catch(console.error);
```

