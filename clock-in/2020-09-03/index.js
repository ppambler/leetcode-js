var romanToInt = function (s) {
  let hashTable = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };
  let tmp = s,
    arr = [],
    sumArr = [];

  // tmp = 'III' -> tmp[0] = 'I'
  // tmp = 'IV' -> tmp[0] = 'I'、 tmp[1] = 'V'
  // "MCMXCIV"
  for (let i = 0; i < tmp.length; i++) {
    arr.push(hashTable[tmp[i]]);
  }

  for (let index = 1; index <= arr.length; index++) {
    if (arr[index] > arr[index - 1]) {
      sumArr.push(arr[index] - arr[index - 1]);
      index++;
    } else {
      sumArr.push(arr[index - 1]);
    }
  }
  console.log(sumArr);
  let res = sumArr.reduce((x, y) => {
    return x + y;
  });
  return res;
};
