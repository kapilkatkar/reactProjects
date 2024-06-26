const wakeUpPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("succesfully woke up");
  }, 3000);
});

const hadBrakfast = new Promise((res, rej) => {
  setTimeout(() => {
    res("had brkfast");
  }, 2000);
});

const wentToShopping = new Promise((res, rej) => {
  setTimeout(() => {
    res("went to shopping");
  }, 2000);
});

wakeUpPromise
  .then((data) => {
    console.log(data);
    hadBrakfast
      .then((data) => {
        console.log(data);
        wentToShopping
          .then((data) => {
            console.log(data);
          })
          .catch((err) => {
            console.log(err);
          });
      })
      .catch((err) => {
        console.log(err);
      });
  })
  .catch((err) => {
    console.log(err);
  });
