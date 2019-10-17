'use strict';

let myMap = new Map();
myMap
  .set('a string', "和键'a string'关联的值")
  .set({}, '和键keyObj关联的值')
  .set(function() {}, '和键keyFunc关联的值');

// 其他属性、方法
console.log(myMap.size); // 3，map键值对的数量
console.log(myMap.has({})); // false,用 === 检查一个键是否存在
console.log(myMap.delete('a string')); // true, 用一个键删除键值对，返回一个布尔值，表示是否删除成功的
console.log(myMap); // Map { {} => '和键keyObj关联的值', [λ] => '和键keyFunc关联的值' }
console.log(myMap.clear()); // undefined, 清空键值对，返回 undefined
console.log(myMap); // {}
