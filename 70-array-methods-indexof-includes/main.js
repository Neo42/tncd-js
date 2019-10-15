'use strict';

let myArray = ['a', 'b', 'b', 'c'];
// arr.indexOf(element, start)
// 从起始索引 start 开始从左到右用三联等号 === 搜索元素 element，返回找到的第一个元素的索引，不转换元素类型
console.log(myArray.indexOf('b', 0)); // 1
console.log(myArray.lastIndexOf('b')); // 2，lastIndexOf 从右到左搜索返回找到的第一个元素的索引
console.log(myArray.includes('b')); // true，includes 存在性检查

myArray = [NaN];
console.log(myArray.indexOf(NaN)); // -1，不支持搜索 NaN，因为 === 不支持 NaN
console.log(myArray.lastIndexOf(NaN)); // -1，同理
