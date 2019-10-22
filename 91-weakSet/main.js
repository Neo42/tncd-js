'use strict';
// 只能存放对象
// 对象键和对象外对象的内存同步清理
// 没有 size, keys 和迭代方法

let matrix = new WeakSet(),
  neo = { name: 'neo' };
matrix.add(neo);

console.log(matrix.has(neo)); // true
neo = null;
console.log(matrix.has(neo)); // false
