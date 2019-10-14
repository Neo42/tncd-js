'use strict';

let myArray = ['a', 'b', 'c'];

// arr.indexOf(element, start):从起始位置 start 开始从左到右用 === 搜索元素 element，不转换元素类型
console.log(myArray.indexOf('b', 0)); // 1
console.log(myArray.lastIndexOf('b')); // 1，lastIndexOf 从右到左搜索
console.log(myArray.includes('b')); // true，includes 存在性检查

myArray = [NaN];
console.log(myArray.indexOf(NaN)); // -1，不支持搜索NaN，因为 === 不支持 NaN
console.log(myArray.lastIndexOf(NaN)); // -1，同理

// arr.find((element, index, array) => {})：
// element 元素， index 该元素的索引数， array 原数组
// 对每个元素 element 执行一次回调函数（可以是任何形式），结果返回的是所有回调函数执行结果为 true 的 element
myArray = [{ id: 1 }, { id: 2 }, { id: 3 }];
myArray.find(ele => console.log(ele)); // 输出每个元素对象
console.log(myArray.find(ele => ele.id === 2)); // { id:2 } 返回并输出对象属性 id 为 2 的 元素
console.log(
  myArray.find((ele, i, array) => {
    // 也可以不使用参数，这里直接跳过了 element
    console.log(i); // 0, 1, 2
    return i > array.length / 2 ? true : false;
  })
); // { id: 3 }，返回 index > 1.5 的元素 ele
