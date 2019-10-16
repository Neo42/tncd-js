'use strict';

// arr.filter((element, index, array) => {})
// 返回函数运行结果为 true 的所有元素
let myArray = [{ id: 1 }, { id: 1 }, { id: 2 }, { id: 3 }];
console.log(myArray.filter(ele => ele.id === 1)); // [{ id:1 }, { id:1 }]
