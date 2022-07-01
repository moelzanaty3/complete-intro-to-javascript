// Promise.all([...]) is a useful helper function
// that lets you execute asynchronous operations in parallel
// using a fail-fast strategy,
// and aggregate the results into an array.

// If all promises are resolved successfully,
// then promisses fulfills with an array
// containing fulfilled values of individual promises.
// The order of promises in the array does matter
// — you'll get the fulfilled values in that order.

// But if at least one promise rejects,
// then allPromise rejects right away
// (without waiting for other promises to resolve)
// with the same reason.

// https://jsonplaceholder.typicode.com/todos
// https://jsonplaceholder.typicode.com/posts

const allPromises = Promise.all([
  fetch("https://jsonplaceholder.typicode.com/todos"),
  fetch("https://jsonplaceholder.typicode.com/posts"),
]);

allPromises
  .then((responses) => Promise.all(responses.map((res) => res.json())))
  .then((data) => {
    console.log(data);
  })
  .catch(console.error);
