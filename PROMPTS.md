## spreedlyService.ts
/*
1. Scaffold Service Bolierplate

Prompt:
Using https://docs.spreedly.com/reference/api/v1/ docs create a spreedlyService API wrapper
that implements methods for paymentMethods.createGooglePay and deliver Spreedly endpoints
*/

/*
2. Remove dependencies

Prompt:
Remove axios dependency and refactor using native node functionality
*/

/*
3. Refactor for abstraction & maintainability

Prompt:
Refactor the request logic and error handling out of the createGooglePay and deliver methods
into a shared class function
*/


## spreedlyService.ts, index.d.ts
/*
4. Add better TypeScript Types

Chat Prompt:
https://docs.spreedly.com/reference/api/v1/ 
Write typescript types for the createGooglePay function that includes all Request Body parameters
and Response Body parameters from the Create Google Pay specs and example
(copy from docs)

Prompt: Add types to this method from index.d.ts
Prompt: Add guard method to test for expected Response type
Prompt: Add return type to this method that will be an object which may contain the property "transaction" with value of an object

*/

/*
4b. More Types
Prompt:
write the DeliverRequest and DeliverResponse types based on the properties in these specs:
""" (copy from docs)
*/

## spreedlyService.test.ts
/*
5. Write unit tests

Prompt:
Write unit tests for the service and methods in spreedlyService3.ts

Prompt: 
Add a couple tests for malformed or bad data 
*/

## demo.ts
/*
6. Demonstrate our nicely typed API service wrapper

Prompt:
Import and demonstrate usage of the service in spreedlyService3.ts

Prompt:
Use the response from createGooglePay to deliver the payment
to a receiver
*/

## README.md
/* 
7. Documentation
*/
<!--
Prompt:
Write the documentation for the Spreedly Service API wrapper in @spreedlyService4.ts 
referencing spreedlyService.test.ts and demo.ts
including a bullet list of ## Methods and a ## Usage example
-->