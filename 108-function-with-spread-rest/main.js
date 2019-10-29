'use strict';

// spread：展开各个元素
let spreadArray = [21, 23, 45];
console.log(...spreadArray); // 21 23 45 ​​​​​

// rest：收集剩余元素，构成数组
// [...rest] = arguments.slice(2)
function log1(a, b, ...rest) {
  // 收集除第一、二个以外的剩余的参数，构成数组 rest
  console.log(a, b, rest); // 输出 rest 数组
}

// [a, b, ...rest] = [...spreadArray]
log1(...spreadArray); // 21 23 [ 45 ]

// 合用
function log2(a, b, ...rest) {
  console.log(a, b, ...rest); // 展开 rest 的每个元素再输出
}
log2(...spreadArray); // 21 23 45 ​​​​​

let arr = [1, 2, 3];
// 嵌套解构
function log3([...rest]) {
  // 实参必须是数组
  console.log(rest);
}

// [[...rest]] = [arr]
log3(arr); // [ 1, 2, 3 ]
