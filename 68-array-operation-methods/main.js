'use strict';

// 双端队列
// 末端方法,较快
console.log(myArray.push('Aaaa')); // 4, 添加为最后一个元素
console.log(myArray.pop()); // Aaaa， 取出并返回最后一个元素

// 前端方法，较慢
// 三步
// 1.添加或移除第一个元素
// 2. 修改每个元素的索引
// 3. 更新 length 属性
console.log(myArray.unshift('New element')); // 前端添加一个元素,返回数组的新长度
console.log(myArray.shift()); // ’New element‘，取出并返回第一个元素
