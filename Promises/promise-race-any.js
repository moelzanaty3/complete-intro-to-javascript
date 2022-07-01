// const allPromises = Promise.any([
const allPromises = Promise.race([
  new Promise((resolve, reject) => {
    setTimeout(() => reject("one"), 500);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => reject("two"), 600);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("three"), 1000);
  }),
  new Promise((resolve, reject) => {
    setTimeout(() => resolve("four"), 500);
  }),
]);

allPromises
  .then((value) => {
    console.log(value);
  })
  .catch(console.error);
