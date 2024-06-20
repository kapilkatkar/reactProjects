const countOfRepeatedNos = (arr, num) => {
  let count = 0;
  arr.forEach((element) => {
    if (element === num) {
      count = count + 1;
    }
  });
  return count;
};
console.log(
  countOfRepeatedNos(
    [1, 5, 7, 8, 9, 4, 6, 3, 9, 1, 0, 5, 4, 3, 3, 3, 4, 6, 7, 9],
    3
  )
);
