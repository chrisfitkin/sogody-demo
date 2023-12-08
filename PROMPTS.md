## documentation

https://docs.spreedly.com/reference/api/v1/

- non standard chevrons for nested objects
- endpoint uses extensions to denote format
- not all fields are provided in examples
- format only examples, no cURL or implementations

## Demonstrate Cursor

/\*
Chat w/ ChatGPT
Chat Prompt: What is a package.json file

Edit w/ ChatGPT
Chat: Add a description, increment version, and axios dependency to this package

Indexing reference material
https://docs.spreedly.com/reference/api/v1/
\*/

## spreedlyService.ts

/\*

1. Scaffold Service Bolierplate

Prompt:
Using https://docs.spreedly.com/reference/api/v1/ docs create a spreedlyService API wrapper
that implements methods for paymentMethods.createGooglePay and deliver Spreedly endpoints for delivering payment tokens to a receiver
\*/

/\* 2. Remove dependencies

Prompt:
Remove axios dependency and refactor using native node functionality
\*/

/\* 3. Refactor for abstraction & maintainability

Prompt:
Refactor the request logic and error handling out of the createGooglePay and deliver methods
into a shared class function
\*/

## spreedlyService.ts, index.d.ts

/\* 4. Add better TypeScript Types

Chat Prompt:
https://docs.spreedly.com/reference/api/v1/
Write typescript types for the createGooglePay function that includes all Request Body parameters
and Response Body parameters from the Create Google Pay specs and example
(copy from docs)

Prompt: Add types to this method from index.d.ts
Prompt: Explicitely list out the input parameters and properties from the types in @index.d.ts
Prompt: Add guard method to test for expected Response type
Prompt: Add a guard statement to make sure that response.data is in the expected shape that matches the GooglePayResponse type in @index.d.ts
Prompt: Add return type to this method that will be an object which may contain the property "transaction" with value of an object

\*/

/_
4b. More Types
Prompt:
write the DeliverRequest and DeliverResponse types based on the properties in these specs:
""" (copy from docs)
_/spree

## spreedlyService.test.ts

/\* 5. Write unit tests

Prompt:
Write unit tests for the service and methods in spreedlyService3.ts

Prompt:
Add a couple tests for malformed or bad data

5b. Expand service capabilities

Prompt:
Add methods for createCreditCard, createApplePay, listPayments, showPayment,
Add methods for captureFullAmount, capturePartialAmount
Add methods for createHTTPReceiver, showReciver, updateReciver
\*/

## demo.ts

/\* 6. Demonstrate our nicely typed API service wrapper

Prompt:
Import and demonstrate usage of the service in spreedlyService3.ts

Prompt:
Use the response from createGooglePay to deliver the payment
to a receiver
\*/

## README.md

/_ 7. Documentation
_/

<!--
Prompt:
Write the documentation for the Spreedly Service API wrapper in @spreedlyService4.ts
referencing spreedlyService.test.ts and demo.ts
including a bullet list of ## Methods and a ## Usage example
-->
