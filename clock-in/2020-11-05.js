var canFormArray = function (arr, pieces) {
  let arr2Str = arr.toString() + ",";
  for (let it of pieces) {
    if (!arr2Str.includes(it.toString() + ",")) {
      return false;
    }
  }
  return true;
};

/**
 * @param {number[]} guess
 * @param {number[]} answer
 * @return {number}
 */
var game = function (guess, answer) {
  // 自己写的循环 判断相等
  // let num = 0;
  // for(let i = 0; i < guess.length; i++) {
  //     if(guess[i] == answer [i]){
  //         num += 1;
  //     }
  // }
  // return num;

  // fliter()函数 返回一个新的数组，数组内元素是符合函数内判断条件的原数组元素
  return guess.filter((item, index) => item === answer[index]).length;
};

var deleteNode = function (node, prev = null) {
  while (node) {
    node.next ? (node.val = node.next.val) : (prev.next = null);
    (prev = node), (node = node.next);
  }
};
