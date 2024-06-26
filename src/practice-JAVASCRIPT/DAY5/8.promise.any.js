/**
 * Promise.any
 * whichever resolved first it will return the value
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
    rej("went to shopping");
  }, 2000);
});

Promise.race([wakeUpPromise, hadBrakfast, wentToShopping])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
