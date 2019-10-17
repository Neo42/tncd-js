'use strict';

let myMap = new Map();
myMap
  .set('a string', "和键'a string'关联的值")
  .set({}, '和键keyObj关联的值')
  .set(function() {}, '和键keyFunc关联的值');

// 遍历时会按照先前添加键值对的顺序
for (const pair of myMap) {
  console.log(pair); // [ 'a string', '和键\'a string\'关联的值' ], [ {}, '和键keyObj关联的值' ], [ [λ], '和键keyFunc关联的值' ]
}

// map.keys():返回一个包含 map 所有键的可迭代对象
for (const key of myMap.keys()) {
  console.log(key); // a string, {}, [λ]
}

// map.values():返回一个包含 map 所有键的可迭代对象
for (const value of myMap.values()) {
  console.log(value); // 和键'a string'关联的值, 和键keyObj关联的值, 和键keyFunc关联的值
}

// map.entries():返回一个包含 map 所有键的可迭代对象
for (const entry of myMap.entries()) {
  console.log(entry); // [ 'a string', '和键\'a string\'关联的值' ], [{}, '和键keyObj关联的值'], [([λ], '和键keyFunc关联的值')]
}

// map.forEach((value, key, map) => {}, thisArg):对每个键值对执行相同的操作
myMap.forEach((value, key, map) => console.log(key, value)); // a string 和键'a string'关联的值, {} '和键keyObj关联的值', [λ] '和键keyFunc关联的值
