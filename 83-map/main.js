'use strict';

// new Map(iterable)
// map 的键：任意类型
let aMap = new Map([[1, 'one'], [2, 'two'], [null, 'three']]);
console.log(aMap); // Map { 1 => 'one', 2 => 'two', null => 'three' }
console.log(typeof aMap); // object, map 仍然是对象类型

// map.set()：返回新 map，可以链式操作
let myMap = new Map();
let keyStr = 'a string',
  keyFunc = function() {},
  keyObj = {},
  keyArr = [],
  keyNull = null;

myMap
  .set(keyStr, '和键keyStr关联的值')
  .set(keyObj, '和键keyObj关联的值')
  .set(keyFunc, '和键keyFunc关联的值')
  .set(keyArr, '和键keyArr关联的值')
  .set(keyNull, '和键keyNull关联的值');

// 读取值, 按 === 查找键且认定 null === null
console.log(myMap.get('a string')); // "和键keyStr关联的值"，因为 'a string' === 'a string'
console.log(myMap.get({})); // undefined, 因为 {} !== {}
console.log(myMap.get(function() {})); // undefined, 因为 function() {} !== function() {}
console.log(myMap.get([])); // undefined, 因为 [] !== []
console.log(myMap.get(null)); // 和键keyNull关联的值, 因为此处认为 null === null
