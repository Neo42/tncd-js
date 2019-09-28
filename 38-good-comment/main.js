'use strict';

// 解释型注释

// 尽量分步
let n = prompt('Give a number.');
// 设置跳转标签 nextPrime
nextPrime: for (let i = 2; i <= n; i++) {
  for (let j = 2; j < i; j++) {
    // 检查区间内的每个数是否有因数
    // 如果有，跳标签下一个迭代
    if (i % j === 0) continue nextPrime;
  }

  console.log(i);
}

// 多创建函数，把函数作为注释

// JSDoc 语法
/**
 * 输出并返回一个字符串
 *
 * @param {string} str 要输出的字符串
 * @return {string} modStr 返回的字符串
 */
function logString(string) {
  console.log(string);
  let modedString = 'Mod' + string;
  return modedString;
}
