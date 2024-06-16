/**
 *Promises in JavaScript are a way to handle asynchronous operations.
 They represent a value that may be available now, or in the future, or never.
 Promises provide a cleaner and more structured way to deal with asynchronous code
 compared to traditional callback functions.
 */

/**
 * A promise can be in one of three states:
1. Pending: Initial state, neither fulfilled nor rejected.
2. Fulfilled (Resolved): The operation completed successfully, and the promise has a value.
3. Rejected: The operation failed, and the promise has a reason for the failure.
 */

//create a promise && resolve it or reject it based on the conditions
// eslint-disable-next-line no-unused-vars
const pr = new Promise((res, rej) => {
  setTimeout(() => {
    res("success");
  }, 4000);
});

console.log(pr); //check the state of promise

//handle a promise
//call a promise
pr.then((msg) => {
  console.log(msg);
}).catch((err) => {
  console.log(err);
});
// if we dont add catch to the promise and if it fails ot will throw an error in console
// thats why we need to handle rejected promise by using catch
