'use strict';

let myMap = new Map();
myMap
  .set('a string', "和键'a string'关联的值")
  .set({}, '和键keyObj关联的值')
  .set(function() {}, '和键keyFunc关联的值');

// map 和 object 转化
// Object.fromEntries(map.entries())，map => object
console.log(Object.fromEntries(myMap.entries())); // { 'a string': '和键\'a string\'关联的值', '[object Object]': '和键keyObj关联的值', 'function () {\n    $_$wf(1);\n}': '和键keyFunc关联的值' }

// new Map(Object.entries({}))，object => map
console.log(new Map(Object.entries({ a: 1 }))); // Map { 'a' => 1 }
