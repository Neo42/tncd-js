'use strict';

let myArray = ['a', 'b', 'c'];

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

// str.splice(position, length, ...items)：取出并返回以第 position 位为首的，长度为 length 的数组，并插入多个元素 ...items，改变原数组，返回取出的数组
// 支持从末尾开始索引
console.log(myArray.splice(0, 2, 'new', 'items'));
console.log(myArray.splice(2, 0, 'new', 'items'));
console.log(myArray);

// 以上全是改变原数组的方法，此后讲的都是不改变原数组的方法

// str.slice(start,end)：复制 [start, end) 的元素，不改变原数组，返回取出的数组
console.log(myArray.slice(0, 2));

// str.concat(...items)：连接 str 和各个元素 ...items，不改变原数组，返回结果
console.log(myArray.concat('yolo', 'yoyoyo'));
console.log(myArray);

// forEach：对于每个元素 element 和索引数 index都用原数组 array 执行同一种操作，返回新数组，不改变原数组
myArray.forEach((element, index, array) =>
  console.log(`${element}, ${index}, ${array}`)
);
