'use strict';

// arr.copyWithin(target, start, end)
// 复制数组 [start, end) 的部分到原数组的 target 索引位置，返回改编后的数组，也会改变原数组的内容但不改变其长度
// target: 复制数组的一部分到这个位置。如果大于数组长度，将不会发生复制
// start: 从数组这个索引位置开始复制。默认为 0
// end: 到数组这个索引位置结束复制但不包括该位置的元素。默认为 arr.length

let myArray = ['a', 'b', 'c', 'd'];
console.log(myArray.copyWithin(1, 0, 1)); // [ 'a', 'a', 'c', 'd' ]，把 ['a'] 复制到索引 1 的位置
console.log(myArray); // [ 'a', 'a', 'c', 'd' ]，改变原数组
console.log(myArray.copyWithin(0, -2, -1)); // [ 'c', 'a', 'c', 'd' ]，把 ['c'] 复制到索引 0 的位置
