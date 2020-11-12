/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function (l1, l2) {
  if (l1) {
    if (l2) {
      var val, next;
      if (l1.val < l2.val) {
        val = l1.val;
        next = mergeTwoLists(l1.next, l2);
      } else {
        val = l2.val;
        next = mergeTwoLists(l1, l2.next);
      }
      return new ListNode(val, next);
    } else {
      return l1;
    }
  }
  return l2;
};

var maxSubArray = function (nums) {
  let ans = nums[0];
  let sum = 0;
  for (let num of nums) {
    // if(sum > 0) { 可以写成这样
    if (sum + num > num) {
      sum = sum + num;
    } else {
      sum = num;
    }
    ans = Math.max(ans, sum);
  }
  return ans;
};

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  return s.trim().split(" ").pop().length;
};
