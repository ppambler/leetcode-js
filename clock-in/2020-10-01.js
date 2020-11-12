/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s, a) {
  return (
    (a = []) &&
    s
      .split("")
      .reduce(
        (len, v, i) =>
          ((i = a.indexOf(v)) > -1 && (a = a.slice(++i)) && 0 > 1) ||
          (a.push(v) && Math.max(len, a.length)),
        0
      )
  );
};

/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows <= 1) return s;
  const length = s.length;
  const size = 2 * numRows - 2;
  let res = "";
  for (let j = 0; j <= size / 2; j++) {
    for (let i = 0; i <= parseInt(length / size); i++) {
      let iCol1 = i * size + j;
      let iCol2 = (i + 1) * size + -j;
      if (iCol1 < length) res += s[iCol1];
      if (j == 0 || j == size / 2) continue;
      if (iCol2 < length && iCol1 != iCol2) res += s[iCol2];
    }
  }
  return res;
};

/**
 * @param {string} str
 * @return {number}
 */
var myAtoi = function (str) {
  const number = parseInt(str, 10);

  if (isNaN(number)) {
    return 0;
  } else if (number < Math.pow(-2, 31) || number > Math.pow(2, 31) - 1) {
    return number < Math.pow(-2, 31) ? Math.pow(-2, 31) : Math.pow(2, 31) - 1;
  } else {
    return number;
  }
};
