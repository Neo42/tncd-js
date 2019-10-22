'use strict';

let neo = { name: 'neo' }; // neo 是对这个对象的引用

// neo = null; // 改变引用，原对象会被从内存中清除

// let matrix = [neo]; // 把对对象的引用作为元素装进数组
// neo = null; // 原对象的引用改变
// console.log(matrix); // [ { name: 'neo' } ], 之前的数组不会改变

// let matrix = new Map();
// matrix.set(neo, '...');
// neo = null;
// console.log(matrix); // Map { { name: 'neo' } => '...' }

// 对象的引用被覆盖后，weakMap 中相应的对象键也随之删除
let matrix = new WeakMap(),
  obj = {};
// matrix.set('', {}); // Invalid value used as weak map key，weakMap 中不能把字符串作为键使用
matrix.set(neo, obj);
console.log(matrix.get(neo)); // I'm alive.
neo = null;
console.log(matrix.get(neo)); // undefined

// 没有访问全部键或值的方法，因为 JavaScript 引擎执行内存清理的方式不固定，有可能全部清理，也有可能清理一部分。
