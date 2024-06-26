/**
 * Promise.all
 * 1. if all the promises will get successfull, it will return all the value
 * 2. it will take max time by any promises to return the value, here 4000ms
 * 3. if any promises fai; it will throw err
 */

const wakeUpPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("succesfully woke up");
  }, 3000);
});

const hadBrakfast = new Promise((res, rej) => {
  setTimeout(() => {
    res("had brkfast");
  }, 4000);
});

const wentToShopping = new Promise((res, rej) => {
  setTimeout(() => {
    res("went to shopping");
  }, 2000);
});

Promise.all([wakeUpPromise, hadBrakfast, wentToShopping])
  .then((result) => {
    console.log(result);
  })
  .catch((err) => {
    console.log(err);
  });
