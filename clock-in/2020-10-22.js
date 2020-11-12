/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function (nums) {
  let map = new Map();
  let numsArr = [...nums];

  nums.sort((value1, value2) => value1 - value2);

  nums.forEach((item, index) => {
    map.has(item) ? "" : map.set(item, index);
  });

  return numsArr.map((item) => map.get(item));
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var runningSum = function (nums) {
  for (let i = 1, len = nums.length; i < len; i++) {
    nums[i] = nums[i] + nums[i - 1];
  }
  return nums;
};

var numIdenticalPairs = function (nums) {
  let arr = [],
    len = nums.length;
  for (let i = 0; i < len; i++) {
    for (let j = i + 1; j < len; j++) {
      if (nums[i] == nums[j]) {
        arr.push([i, j]);
      }
    }
  }
  return arr.length;
};
