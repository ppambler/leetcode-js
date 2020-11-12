/**
 * @param {string} s
 * @return {string}
 */
var longestPalindrome = function (s) {
  let result = s[0] || "";
  for (let i = 0; i < s.length; i++) {
    for (let j = 1; j <= 2; j++) {
      //偶数奇数回文串
      let left = i,
        right = i + j;
      while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--, right++; //向外扩展直到两端不相同
      }
      let length = right - left - 1; //(right - 1) - (left + 1) + 1
      if (length > result.length) {
        result = s.substr(left + 1, length);
      }
    }
  }
  return result;
};

/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function (num) {
  //可任意拓展【个位数单位组，十位数单位组，百位数单位组····】
  const arr = [
    ["I", "V", "X"],
    ["X", "L", "C"],
    ["C", "D", "M"],
    ["M", "任意单位", "随意增加"],
  ];
  let str = "";
  //转化函数 把个位数的阿拉伯数字转化成罗马数字，在配上输入的单位数组
  let fun = (n, strArr) => {
    if (n >= 9) {
      //这里可以为等号，因为n不可能为2位数 如果是个位数单位组9即为IX
      str += strArr[0] + strArr[2];
      n -= 9;
    } else if (n >= 5) {
      //5即为V+尾部处理I···
      str += strArr[1];
      n -= 5;
    } else if (n == 4) {
      //这里可以为等号 即为IV
      str += strArr[0] + strArr[1];
      n -= 4;
    }
    //尾部处理 这段是处理8~6和4~1
    while (n > 0) {
      str += strArr[0];
      n--;
    }
  };
  //>=1000对应3 >=100对应下标2 >=10对应下标1 >=1对应下标0
  let idx = arr.length; //单位下标
  let critical = 0; //临界数 1000 100 10 等
  while (num > 0) {
    critical = Math.pow(10, idx);
    if (num >= critical) {
      //例如当num = 320 此时idx = 2，critical = 100
      //向函数fun输入 3 和 ["C", "D", "M"]
      fun(Math.floor(num / critical), arr[idx]);
      //num = 320 % 100 = 20
      num %= critical;
    }
    idx--;
  }
  return str;
};

/**
 * @param {number} n
 * @return {string}
 */
var countAndSay = function (n) {
  let prev = "1";
  for (let i = 1; i < n; i++) {
    prev = prev.replace(/(\d)\1*/g, (item) => `${item.length}${item[0]}`);
  }
  return prev;
};
