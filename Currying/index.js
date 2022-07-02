// Currying is a transform that makes
// f(a,b,c) callable as f(a)(b)(c).
// curring is a pattern where you take a function
// that accept a N number of arguments
// and it will continue to return a new function
// until recevive all of those arguments

// add (2, 3) => 5
// add(2)(3) => 5

function add(a, b) {
  if (b === undefined) {
    // return (b) => {
    //   return a + b
    // }

    // return (b) => add(a, b)
    return add.bind(null, a);
  }
  return a + b;
}

console.assert(add(2, 3) === 5, "Whoops!! something wrong in add(2, 3)");

console.assert(add(2)(3) === 5, "Whoops!! something wrong in add(2)(3)");

const add2 = add(2);
const nums = [1, 2, 3, 4];
console.log(nums.map(add2));

// logging function log(date, importance, message)
// importance can be => DEBUG, INFO, ...

function log(date, importance, message) {
  const formatedDate = `[${date.getHours()}:${date.getMinutes()}]`;
  console.log(`${formatedDate} [${importance}] ${message}`);
}

log = _.curry(log);

log(new Date(), "DEBUG", "some debug");

log(new Date())("DEBUG")("some debug"); // log(a)(b)(c)

// logNow will be the partial of log with fixed first argument
let logNow = log(new Date());
let infoNow = logNow("INFO");

// use it
infoNow("message");

// So:

// 1. We didn’t lose anything after currying:
// log is still callable normally.
// 2. We can easily generate partial functions
// such as for today’s logs.
