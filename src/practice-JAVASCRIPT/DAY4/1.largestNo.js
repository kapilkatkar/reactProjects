const largestNo = (arr) => {
  let largestNo = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > largestNo) {
      largestNo = arr[i];
    }
  }
  return largestNo;
};
console.log(largestNo([1, 4, 5, 7, 89, 9, 99, 9, 9, 9, 76, 5, 545, 4323]));
