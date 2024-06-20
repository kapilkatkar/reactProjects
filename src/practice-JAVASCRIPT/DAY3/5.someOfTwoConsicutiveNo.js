const someOftwoConsecutiveNo = (arr, num) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; i < arr.length; j++) {
      if (arr[i] + arr[j] === num) {
        return `${arr[i]}, ${arr[j]}`;
      }
    }
  }
};
console.log(
  someOftwoConsecutiveNo([1, 5, 7, 8, 9, 4, 6, 3, 9, 1, 0, 5, 4, 3, 3, 3], 9)
);
