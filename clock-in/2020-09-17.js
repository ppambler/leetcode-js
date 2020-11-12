/**
 * @param {string} s
 * @return {boolean}
 */
const map = {
  "(": ")",
  "[": "]",
  "{": "}",
};

var isValid = function (s) {
  let stack = [];
  for (let i = 0; i < s.length; i++) {
    if (s[i] === "(" || s[i] === "[" || s[i] === "{") {
      stack.push(s[i]);
    } else if (stack.length - 1 < 0 || map[stack[stack.length - 1]] !== s[i]) {
      return false;
    } else {
      stack.pop();
    }
  }
  return stack.length === 0;
};

var removeDuplicates = function (nums) {
  let j = 0;
  let n = nums.length;
  for (let i = 1; i < n; i++) {
    if (nums[i] != nums[i - 1]) {
      j++;
      nums[j] = nums[i];
    }
  }
  return j + 1;
};

var removeElement = (nums, val) => {
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === val) {
      nums.splice(i, 1);
      i--;
    }
  }
  return nums.length;
};
