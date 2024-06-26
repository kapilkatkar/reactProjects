const outerFun = () => {
  let x = 10;
  const innerFun = () => {
    console.log(x);
  };
  innerFun();
};
outerFun();

const createCounter = () => {
  let count = 0;

  const increament = () => {
    count++;
    return count;
  };

  const decreament = () => {
    count--;
    return count;
  };

  const getCount = () => {
    return count;
  };
  return {
    increament,
    decreament,
    getCount,
  };
};
const counter = createCounter();
console.log(counter.increament());
console.log(counter.increament());
console.log(counter.decreament());
console.log(counter.getCount());
console.log(counter.increament());
