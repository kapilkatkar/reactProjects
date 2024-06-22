const findKthLargest = (nums, k) => {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > nums[i]) {
        let swapVar = nums[i];
        nums[i] = nums[j];
        nums[j] = swapVar;
      }
    }
  }
  console.log(nums);
  return nums[k - 1];
};
console.log(findKthLargest([3, 2, 3, 1, 2, 4, 5, 5, 6, -2, -7, -6], 2));
