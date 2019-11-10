'use strict';

let person = { name: 'Neo42' };
let descriptor = Object.getOwnPropertyDescriptor(person, 'name');

console.log(typeof descriptor, '\n' + JSON.stringify(descriptor, null, 2));
// Object
// {
//   "value": "Neo42",
//   "writable": true,
//   "enumerable": true,
//   "configurable": true
// }

Object.defineProperty(person, 'name', {
  value: 'Wes Bos',
  writable: false
});

// person.name = 'Suz Hinton'; // Cannot assign to read only property 'name' of object '#<Object>'

Object.defineProperty(person, 'age', {
  value: 'Donno',
  enumerable: false
});

for (const key in person) {
  // age 属性不会出现
  console.log(key); // name
}

descriptor = Object.getOwnPropertyDescriptor(Math, 'E'); //
console.log(JSON.stringify(descriptor, null, 2));
// {
//   "value": 2.718281828459045,
//   "writable": false,
//   "enumerable": false,
//   "configurable": false // 无法配置
// }

// configurable: false
// 不能把 writable 从 false 改为 true
// 不能修改 configurable 和 enumerable
