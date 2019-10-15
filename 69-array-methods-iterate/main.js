'use strict';

let myArray = ['a', 'b', 'c'];

// forEach：对于每个元素 element 和当前索引数 index都用原数组 array 执行同一种操作，返回新数组，不改变原数组
myArray.forEach((element, index, array) =>
  console.log(`${element}, ${index}, ${array}`)
);
// a, 0, a,b,c ​​​​​
// b, 1, a,b,c ​​​​​
// c, 2, a,b,c ​​​​​
