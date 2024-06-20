const countOfRepeatedNos = (arr) => {
  const count = {};

  for (let i = 0; i < arr.length; i++) {
    if (count[arr[i]]) {
      count[arr[i]] += 1;
    } else {
      count[arr[i]] = 1;
    }
  }

  return count;
};

console.log(
  countOfRepeatedNos([1, 5, 7, 8, 9, 4, 6, 9, 1, 0, 5, 4, 4, 6, 7, 9])
);
