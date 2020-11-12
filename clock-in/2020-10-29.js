/**
 * @param {string} s
 * @param {number} n
 * @return {string}
 */
var reverseLeftWords = function (s, n) {
  return s.slice(n) + s.slice(0, n);
};

/**
 * @param {number[]} nums
 * @param {number} n
 * @return {number[]}
 */
var shuffle = function (nums, n) {
  return nums.map((_v, i, arr) =>
    i % 2 ? arr[n + Math.floor(i / 2)] : arr[i / 2]
  );
};

/**
 * @param {number} n
 * @return {number}
 */
var subtractProductAndSum = function (n) {
  let initial = n,
    result = 0,
    mul = 1,
    add = 0;
  initial = initial.toString().split("").map(Number);
  initial.reduce((total, cur) => {
    mul = mul * cur;
    add = add + cur;
  }, 0);
  return (result = mul - add);
};
