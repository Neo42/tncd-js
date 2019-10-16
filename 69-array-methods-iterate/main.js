'use strict';

let myArray = ['a', 'b', 'c'];

// arr.forEach((element, index, array) => {}, thisArg)
// 对每个元素 element 和当前索引数 index都用原数组 array 执行同一种操作，返回新数组，不改变原数组
// 可以通过 thisArg(可选) 指定回调执行时的 this，但要使用 function 声明回调函数而不能用箭头函数，因为箭头函数无法绑定 this
myArray.forEach((element, index, array) =>
  console.log(`${element}, ${index}, ${array}`)
);
// a, 0, a,b,c ​​​​​
// b, 1, a,b,c ​​​​​
// c, 2, a,b,c ​​​​​
