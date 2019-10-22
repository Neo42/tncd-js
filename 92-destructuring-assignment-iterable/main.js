'use strict';

let classes = ['BB', '3POunit', 'R2'];
let [bb8, c3po, r2d2] = classes; // let bb8 = classes[0]; let c3po = classes[1]; let r2d2 = classes[3];
console.log(bb8, c3po, r2d2); //

// 跳过
[bb8, , r2d2] = classes; // 跳过数组中的第二个
console.log(bb8, c3po); // BB 3POunit

// ...rest
let [droid, ...rest] = classes;
console.log(droid, rest); // BB [ '3POunit', 'R2' ]

// 默认值
[droid = 'R2'] = [, classes]; // droid 默认值为 'R2', 右边跳过了第一个元素，classes 实际上没有参与赋值
console.log(droid); // R2
[droid = 'R2'] = [classes]; // droid 默认值为 'R2', 但由于右边 classes 后来参与赋值，所以 droid 最后值是 classes 这个数组（因为 droid 这个数组嵌套在解构赋值的方括号里）
console.log(droid); // [ 'BB', '3POunit', 'R2' ]

// 所有的 iterable 变量都适用
let [one, two, three] = 'abc';
console.log(one, two, three); // a b c

// 与某些结构、方法连用
// forof, Object.entries
let obj = { 0: 1 };
for (const [key, value] of Object.entries(obj)) {
  console.log(key, value);
} // 0, 1

// map, Object.entries
Object.entries(obj).map(([key, value], index) =>
  console.log(key, value, index)
); // 0 1 0 ​​​​​
