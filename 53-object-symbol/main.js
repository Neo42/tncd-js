'use strict';

// 对象属性键
// 创建
let id1 = Symbol('id');
let id2 = Symbol('id');
console.log(id1 === id2); // false
console.log(id1); // Symbol(id)
// console.log(id1 + ''); // Uncaught TypeError: Cannot convert a Symbol value to a string

id1 = id2 = Symbol.for('id');
console.log(id1); // Symbol(id)
console.log(id2); // Symbol(id)
console.log(Symbol.keyFor(id1)); // id，显示一个 symbol 的描述

// baby[id1] = baby[id2] = 2
let baby = {
  [id1]: 1,
  [id2]: 2
};

console.log(baby[id1]); // 2
console.log(baby[id2]); // 2

const people = {};
const emptyObj = {};
people.james = 'Lebron James';
people[Symbol('bob')] = { name: 'Bob Smith' };
people[Symbol('bob')] = { name: 'Bob Jones' };
console.log(people); // {james: 'Lebron James', [Symbol(bob)]: {name: 'Bob Smith'}, [symbol(bob)]: 'Bob Jones'}

// assign, Reflect.ownKeys, []access
Object.assign(emptyObj, people);
console.log(emptyObj);
console.log(Reflect.ownKeys(people));

// for in loop, keys, getOwnPropertyNames
for (let person in people) {
  console.log(person);
}
console.log(Object.keys(people));
console.log(Object.getOwnPropertyNames(people));

// 系统内置的symbol：Symbol 对象的属性，JavaScript中对象的内置属性键，所有对象都内置，用来存放对象具有特定结构和用途的方法
people[Symbol.toPrimitive] = function() {};
console.log(people);
people[Symbol.iterator] = function() {};
console.log(people);
