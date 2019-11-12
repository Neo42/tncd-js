'use strict';

let obj = {};
console.log(obj.__proto__); // { constructor, hasOwnProperty... }
console.log(Object.prototype); // { constructor, hasOwnProperty... }

console.log(Array.prototype); // { constructor, concat... }
console.log(String.prototype); // { constructor, indexOf... }

let arr = [];
console.log(arr.__proto__.__proto__ === Object.prototype); // true, Array.prototype.__proto__ === Object.prototype
console.log(arr.__proto__.__proto__.__proto__ === null); // true

let func = () => {};
console.log(func.__proto__ === Function.prototype); // true
console.log(func.__proto__.__proto__ === Object.prototype); // true

// Object.prototype.garbbage = 'trash';
// 污染全局, 所以通常不推荐定制 prototype，polyfill 是特例

obj = { 0: 'Neu', 1: 'ro', 2: 'mancer', length: 3 };
obj.join = Array.prototype.join;
console.log(obj.join('')); // Neuromancer
