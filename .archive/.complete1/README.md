<!--
Write the documentation for the Spreedly Service API wrapper in @spreedlyService.ts including a bullet list of ## Methods and a ## Usage example
-->

# Spreedly Service API Wrapper

This service is a wrapper for the Spreedly API. It provides methods to interact with the Spreedly API in a more convenient and structured way.

## Methods

- `makeRequest(url: string, method: string, data: any)`: Makes a request to the Spreedly API.
- `paymentMethods.createApplePay(applePayToken: string)`: Creates an Apple Pay payment method.
- `paymentMethods.createCreditCard(creditCardData: any)`: Creates a Credit Card payment method.
- `paymentMethods.createGooglePay(input: CreateGooglePayInput)`: Creates a Google Pay payment method.
- `verify(paymentMethodToken: string)`: Verifies a payment method.
- `capture.fullAmount(transactionToken: string)`: Captures the full amount of a transaction.
- `capture.partialAmount(transactionToken: string, amount: number)`: Captures a partial amount of a transaction.
- `deliver(paymentMethodToken: string, receiverToken: string, data: any)`: Delivers a payment to a receiver.

## Usage

First, instantiate the service with your environment key and access secret:

```javascript
const spreedlyService = new SpreedlyService('yourEnvironmentKey', 'yourAccessSecret');
```

Then, you can use the methods provided by the service. For example, to create a new Credit Card payment method:

```javascript
const creditCardData = {
  first_name: 'John',
  last_name: 'Doe',
  number: '4111111111111111',
  month: '12',
  year: '2023',
  verification_value: '123'
};

const response = await spreedlyService.paymentMethods.createCreditCard(creditCardData);
console.log(response);
```

Please refer to the Spreedly API documentation for more details on the data required for each method.
