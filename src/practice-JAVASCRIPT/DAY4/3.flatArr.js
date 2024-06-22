const arr = [1, 2, 3, 4, [1, 2], [3, 4, [3, 4, [3, 4, 5, 6]]], 5];

const flatArr = (arr) => {
  let result = [];
  arr.forEach((element) => {
    if (Array.isArray(element)) {
      result = result.concat(flatArr(element));
    } else {
      result.push(element);
    }
  });
  return result;
};

console.log(flatArr(arr));
