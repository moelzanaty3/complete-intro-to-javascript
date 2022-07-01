# Complete Intro to Javascript

## Javascript

[Javascript](https**://developer.mozilla.org/en-US/docs/Web/JavaScript) is a programming language that is used to create interactive effects in web browsers. The primary programming language of the web, primarily used for adding functionality to websites. JavaScript is a general purpose multi-paradigm programming language with dynamic typing.

🔖 [Learn more](https**://developer.mozilla.org/en-US/docs/Web/JavaScript)

## Paradigm

A style of programming. Oftentimes languages are built with a specific paradigm in mind, but JavaScript is known as a **multi-paradigm** language, because it allows for programming in a variety of paradigms. Some of the major paradigms of JavaScript include:

- **Event-driven**: Functions can be made to respond to events, such as when a user clicks on an element or scrolls down the page.
- **Functional**: Functions can be written as "pure functions", meaning functions that always have the same output for a given set of arguments and never produce side effects. Additionally, JavaScript supports first-class functions and higher-order functions. This means that functions can be treated as normal values, passed as arguments to other functions and returned from functions.
- **Object-oriented**: Objects can be created as custom data stores and they can be made to inherit from each other.
- **Imperative**: Programs can be written by explicitly describing the control flow, such as with loops and conditionals.
- **Declarative**: Programs can be written by describing the desired output with implicit control flow. Oftentimes this is associated with functional programming (e.g. using the forEach function to loop over an array instead of a for loop).
The most basic data types of a language. In JavaScript, there are 7 primitive types**:

## Primitive

- **Number**: Numeric values, including integers and decimal values.
- **BigInt**: Integers too large to store in a number.
- **Boolean**: A binary value of true or false.
- **String**: A sequence of characters.
- **Symbol**: A dynamically generated unique value.
- **Null**: A nonexistent value.
- **Undefined**: A value that has not been set.

JavaScript has a typeof operator that can get the type of a value as a lowercase string. However, do be aware that this function does have some special casing. For example, typeof function will return "function" even though functions are just objects.

🔖 [Learn more](https://developer.mozilla.org/en-US/docs/Glossary/Primitive)

## Promises

An object used for asynchronous operations. These objects have a state of either `pending`, `fulfilled` or `rejected`.

- **pending**: initial state, neither fulfilled nor rejected.
- **fulfilled**: meaning that the operation was completed successfully.
- **rejected**: meaning that the operation failed.

A Promise is created with the `Promise()` constructor, which takes in a callback function, oftentimes called the **executor**. When the executor obtains the result, be it soon or late, doesn’t matter, it should call one of these callbacks:

- **resolve(value)** — if the job is finished successfully, with result `value`.
- **reject(error)**:  — if an error has occurred, error is the `error` object.

```javascript
const promise = new Promise((resolve, reject) => {
      // do something
});
```

The Promise object has three primary functions:

- **then(fulfilledFn rejectedFn)**: fulfilledFn is called when the job is finished successfully, rejectedFn is called when an error has occurred.

- **catch(rejectedFn)**: Calls rejectedFn if the Promise is rejected. returns a new fulfilled Promise with the return value of the callback function. The call .`catch(f)` is a complete analog of `.then(null, f)`, it’s just a shorthand.

- **finally(callback)**:
  - Calls the callback function whenever the Promise is settled (fulfilled or rejected).
  - The idea of finally is to set up a handler for performing cleanup/finalizing after the previous operations are complete.
    > E.g. stopping loading indicators, closing no longer needed connections etc.
    >
  - handler doesn’t get the outcome of the previous handler (it has no arguments). This outcome is passed through instead, to the next suitable handler.
  - A finally handler also shouldn’t return anything. If it does, the returned value is silently ignored.
  - When finally throws an error, then the execution goes to a nearest error handler.

Since these functions all return a new Promise, they can be chained together, such as

```javascript
promise.then(doX).then(doY).catch(handleError).finally(doZ).
```

🔖 [Learn more from MDN](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise)
🔖 [Learn more from javascript.info](https://javascript.info/promise-basics)

## async Function

A function declared using the `async` keyword, causing the function to implicitly return a **Promise** and allowing for usage of the **await** keyword.

Asynchronous functions are primarily an alternative syntax to chaining calls to `Promise.then`.

🔖 [Learn more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/async_function)

## await

A keyword indicating that JavaScript should wait for a Promise to settle before continuing execution of the code. Traditionally this is only available in **async function**s, but it can also be used at the top level of **modules**.

🔖 [Learn more](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/await)

-----------------------------------
Made with 💜 by [Mohammed Elzanaty!](https**://www.linkedin.com/in/moelzanaty3/) **:wave**:
