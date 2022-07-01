// state: pending -> fulfilled -> rejected
/**
 * pending:-
 *    initial state, neither fulfilled nor rejected.
 * fulfilled:-
 *    meaning that the operation was completed successfully.
 * rejected:-
 *    meaning that the operation failed.
 */

function executor(resolve, reject) {
  setTimeout(() => {
    // reject(new Error('Something went worng'))
    resolve(2);
  }, 1500);
}

const promise = new Promise(executor);

promise
  .then(
    (value) => {
      console.log(value);
      return value * 4; // 2*4
    },
    (error) => console.error(`Whoops !!! ${error}`)
  )
  .then((value) => {
    console.log(value);
    // throw new Error('error happen')
  })
  .finally(() => {
    console.log("stop loading indicator");
    throw new Error("Finally Error");
  })
  .catch((error) => {
    console.error(`catch error Whoops !!! ${error}`);
  });
