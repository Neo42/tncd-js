'use strict';

// reduce：在数量，程度或大小上变小或变小
// reduce缩小, fold折叠, accumulate积累, aggregate合计, compress压缩, inject注入 (https://en.wikipedia.org/wiki/Fold_(higher-order_function))
// 将列表“坍缩”或“缩小”（或“折叠”）成单个值 (https://wiki.tcl-lang.org/page/Fold+in+functional+programming)

let myArray = ['a', 'b', 'c'];

// arr.reduce((accumulator, currentElement, index, array) => {}, initialValue)
// 积累值 accumulator, element 当前元素, index 当前元素索引, array 原数组, initialValue 初始值
// reduce 方法中会遍历数组中每个元素，循环运行回调函数，每次回调运行后返回的结果会被赋给积累值 accumulator，最后返回最后一次回调函数运行返回的结果

// 第一次回调时积累值 accumulator 和当前元素 currentElement 取值: 取决于是否有提供初始值 initialValue
// 如果有提供初始值 initialValue
// 1.积累值 accumulator 取值为给定的初始值 initialValue
// 2.当前元素 currentElement 取值为数组第一个元素（从数组第一个元素执行回调函数）

// 如果没有提供初始值 initialValue 时
// 1.积累值 accumulator 取值为原数组的第一个元素
// 2.当前元素 currentElement 取值为数组第二个元素（从数组第二个元素执行回调函数）

// 第二次以及之后的回调运行会把上一次回调函数运行的返回值作为积累值 accumulator
// （也就是说，如果回调函数本身没有返回值（return;），第二次及以后回调中的积累值 accumulator 就是 undefined）

// 提供初始值 'x'
console.log(
  myArray.reduce((acc, ele, ind, arr) => {
    console.log(acc); // x, undefined, undefined
    console.log(ind); // 0, 1, 2
  }, 'x')
); // undefined

// 不提供初始值
console.log(
  myArray.reduce((acc, ele, ind, arr) => {
    console.log(acc); // a, undefined
    console.log(ind); // 1, 2
    return acc + ele;
  })
); // abc

// 特殊情况：空数组
// [].reduce(x => {}); // typeError，空数组 + 不提供初始值 => typeError
console.log([].reduce(x => {}, 'a')); // 'a', 空数组 + 提供初始值 => 结果为初始值
