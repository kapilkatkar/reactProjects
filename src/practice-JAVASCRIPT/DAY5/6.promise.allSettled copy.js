/**
 * Promise.allSettled
 * no matter what it will return the values
 * if it fails or resolve
 * it will take the max time for returning any promises
 * here 4sec
 */

const wakeUpPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("succesfully woke up");
  }, 3000);
});

const hadBrakfast = new Promise((res, rej) => {
  setTimeout(() => {
    rej("failed");
  }, 4000);
});

const wentToShopping = new Promise((res, rej) => {
  setTimeout(() => {
    res("went to shopping");
  }, 2000);
});

Promise.allSettled([wakeUpPromise, hadBrakfast, wentToShopping])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
