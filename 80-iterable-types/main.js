'use strict';

// 可迭代变量：可以使用 for of 循环（不是 for in 循环）中使用的对象
// 类型：String, Array, TypedArray, Map, Set
for (const char of 'string') {
  console.log(char); // s, t, r, i, n, g
}

for (const char of [1, 2, 3, 4, 5]) {
  console.log(char); // 1, 2, 3, 4, 5
}
