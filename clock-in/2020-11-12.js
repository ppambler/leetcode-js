/**
 * @param {number} n
 * @param {number} start
 * @return {number}
 */
var xorOperation = function (n, start) {
  let ans = 0;

  for (let i = 0; i < n; i++) {
    let elem = start + 2 * i;
    ans = ans ^ elem;
  }

  return ans;
};

/**
 * @param {number[]} coins
 * @return {number}
 */
var minCount = function (coins) {
  // 1、预设一个数 存放拿***的次数
  let sum = 0;
  for (let i = 0; i < coins.length; i++) {
    // 2、奇数的情况  注意是%   不是 /
    // 因为每次可以取一个或者两个 所以用2来计算
    // 计算的数拿完所以***最少次数
    // 如果数最多次数 按1算
    if (coins[i] % 2 !== 0) {
      sum = sum + (coins[i] + 1) / 2;
    } else if (coins[i] % 2 == 0) {
      // 3、偶数的情况
      sum = sum + coins[i] / 2;
    }
  }
  return sum;
};

/**
 * @param {string} s
 * @return {number}
 */
var maxDepth = function(s) {
  let n = 0,l = 0;
  let i = 0;
  while(i<s.length){
      if(s[i] == '('){
          l++;     
      }else if(s[i] == ')'){
          l--;
      } 
      n = n > l ? n : l; 
      i++
  }
  return n;
};