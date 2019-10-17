'use strict';

// map 的键：任意类型
let aMap = new Map([[1, 'one'], [2, 'two'], [null, 'three']]);
console.log(aMap); // Map { 1 => 'one', 2 => 'two', null => 'three' }
console.log(typeof aMap); // object, map 仍然是对象类型

// map.set()：返回新 map，可以链式操作
let myMap = new Map();
myMap
  .set('a string', "和键'a string'关联的值")
  .set({}, '和键keyObj关联的值')
  .set(function() {}, '和键keyFunc关联的值');

// 读取值, 按 === 查找键
console.log(myMap.get('a string')); // "和键'a string'关联的值"，因为'a string' === 'a string'
console.log(myMap.get({})); // undefined, 因为{} !== {}
console.log(myMap.get(function() {})); // undefined, 因为function() {} !== function() {}
