'use strict';

// 特殊的对象，有序
let myArray = [,]; // 1个元素的数组
console.log(myArray[0]);

myArray[0] = 'sad';
myArray[0] = 'happy';
myArray[1] = {};
myArray[2] = function() {
  console.log(myArray[0]);
};
myArray[2](); // happy

// length
myArray = ['sdfas', 11];
myArray.length = 4;
console.log(myArray); // ['sdfas', 11]
myArray.length = 0;
console.log(myArray); // []

// new
let arr = new Array('Apple', 'Pear', 'etc');
console.log(arr); // ['Apple', 'Pear', 'etc']
arr = new Array(3);
console.log(arr.length);
console.log(arr);
console.log(arr[0]);

// 多维数组
let matrix = [[1, 2, 3], [4, 5, 6], [7, 8, 9]];
console.log(matrix[1][1]);

// 循环
for (const i of myArray) {
  console.log(i); // happy, {}, [λ]
}
