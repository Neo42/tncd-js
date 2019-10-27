'use strict';

let 回家 = 与家距离 => {
  if (与家距离 === 0) {
    console.log('我到家了');
    return;
  }
  console.log(与家距离 - 1);
  回家(与家距离 - 1);
};

回家(10);

// function 一个递归函数() {
//   if (基准条件) {
//     （一些操作）+ 返回结果
//   }
//    递归条件
//  （一些操作）+（改变参数）+ 调用自己
// }

// 递归：一个函数在某些条件(递归条件)下以某种固定的方式调用自己(一般是重复调用)，可能存在一种(或多种)条件(基准条件，base case)让这个过程停止。

// x ** n = x * x ** n-1
let pow = (x, n) => {
  return n === 1 ? x : x * pow(x, n - 1);
};

pow = function(x, n) {
  if (n === 1) {
    return x;
  } else {
    return x * pow(x, n - 1);
  }
};

console.log(pow(4, 2)); // 16
