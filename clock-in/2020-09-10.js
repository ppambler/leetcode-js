/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  let res = Array.from(x.toString()).reverse().join("");
  if (res == x.toString()) {
    return true;
  }
  return false;
};

console.log(isPalindrome(101));
console.log(isPalindrome(-121));
console.log(isPalindrome(10));

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length > 0) {
    return strs.reduce((x, y) => {
      for (let len = x.length, str; len >= 0; --len) {
        str = x.substring(0, len);
        if (y.startsWith(str)) {
          return str;
        }
      }
    });
  }
  return "";
};

/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function (digits) {
  let strNum = (Number(digits.join("")) + 1).toString();
  let arr = [];
  for (let i = 0; i < strNum.length; i++) {
    arr = arr.concat(Number(strNum[i]));
  }
  return arr;
};

var plusOne1 = function (digits) {
  let strNum = (BigInt(digits.join("")) + 1n).toString();
  let arr = [];
  for (let i = 0; i < strNum.length; i++) {
    arr = arr.concat(Number(strNum[i]));
  }
  return arr;
};
