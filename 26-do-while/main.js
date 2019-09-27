'use strict';

// 先执行，后判断，符合条件再进行下一迭代
// 不常用，容易出错
let i = 0;
do {
  console.log(i, '没到3');
  i++;
} while (i < 3);

console.log(i, '到3了');
