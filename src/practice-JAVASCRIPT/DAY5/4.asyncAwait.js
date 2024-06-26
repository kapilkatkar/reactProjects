const wakeUpPromise = new Promise((res, rej) => {
  setTimeout(() => {
    res("succesfully woke up");
  }, 3000);
});

const hadBrakfast = new Promise((res, rej) => {
  setTimeout(() => {
    rej("had brkfast");
  }, 4000);
});

const wentToShopping = new Promise((res, rej) => {
  setTimeout(() => {
    res("went to shopping");
  }, 2000);
});

const dailyRoutine = async () => {
  try {
    const result1 = await wakeUpPromise.catch((err) => {
      console.log(err);
      throw err;
    });
    console.log(result1);

    const result2 = await hadBrakfast.catch((err) => {
      console.log(err);
      throw err;
    });
    console.log(result2);

    const result3 = await wentToShopping.catch((err) => {
      console.log(err);
      throw err;
    });
    console.log(result3);
  } catch (err) {
    console.log(err);
    throw err;
  }
};
dailyRoutine();
