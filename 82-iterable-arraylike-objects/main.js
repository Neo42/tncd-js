'use strict';

// TODO:
// MDN文档格式
// thisArg: Array methods

// 类数组对象：带有索引属性和长度属性 length 的对象
let arrayLike = {
  0: 1,
  1: 2,
  2: 3,
  length: 3
}; // 没有定义 [Symbol.iterator]() 方法，不可迭代

// for (const i of arrayLike) {
//   console.log(i);
// } // TypeError, arrayLike is not iterable

// Array.from(arrayLike, mapFn, thisArg)：将类数组对象或者可迭代对象映射转化为数组，可用 thisArg 指定回调运行时的 this
let arr = Array.from(
  arrayLike,
  function(x) {
    return x * x + this.num;
  },
  { num: 1 }
); // 把 arrayLike 映射成平方数再加 1 之后转化成数组
for (const i of arr) {
  console.log(i);
} // 2, 5, 10
