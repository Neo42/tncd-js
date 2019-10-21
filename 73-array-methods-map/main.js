'use strict';
let myArray = ['a', 'b', 'c'];
let myArray2 = [[1, 2], [3, 4], [5, 6]];
// arr.map((element, index, array) => {})
// 取每个元素、当前元素的索引数、和原数组执行回调函数，每次回调执行都会返回一个结果，把这些结果作为元素组成一个新数组并返回
console.log(myArray.map(ele => ele + ' person')); // [ 'a person', 'b person', 'c person' ]

myArray2.map(([odd, even]) => {
  console.log(odd, even);
});
