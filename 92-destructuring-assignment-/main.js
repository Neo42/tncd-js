'use strict';

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
