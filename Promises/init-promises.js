console.log("Promises");

// state: pending -> fulfilled -> rejected
/**
 * pending:- initial state, neither fulfilled nor rejected.
 * fulfilled:- meaning that the operation was completed successfully.
 * rejected:- meaning that the operation failed.
 */

function executor(resolve, reject) {
  // resolve(2);
  // reject("error");

  // the function is executed asynchronously so it's completely non blocking
  // so we will get state "pending" bocz of the fact that this happen
  // immediately after the function is called
  setTimeout(() => {
    resolve(2);
  }, 1000);
}

const promise = new Promise(executor);

console.log(promise);

setTimeout(() => {
  console.log(promise);
}, 1500);
// but how we always know when the promise is resolved or rejected so we can use
// the then method to handle the result

promise.then((value) => console.log(value));
