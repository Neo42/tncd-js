'use strict';
let aMap = new Map([[1, 'one'], [2, 'two']]);
console.log(aMap); // Map { 1 => 'one', 2 => 'two' }

let myMap = new Map();

// 添加键：任意类型
myMap.set('a string', "和键'a string'关联的值");
myMap.set({}, '和键keyObj关联的值');
myMap.set(function() {}, '和键keyFunc关联的值');

console.log(myMap.size); // 3

// 读取值, 按 === 查找属性键
console.log(myMap.get('a string')); // "和键'a string'关联的值", 'a string' === 'a string'
console.log(myMap.get({})); // undefined, {} !== {}
console.log(myMap.get(function() {})); // undefined, function() {} !== function() {}

// 遍历时按照先前添加属性键的顺序
for (const key of myMap) {
  console.log(key); // [ 'a string', '和键\'a string\'关联的值' ], [ {}, '和键keyObj关联的值' ], [ [λ], '和键keyFunc关联的值' ]
}
