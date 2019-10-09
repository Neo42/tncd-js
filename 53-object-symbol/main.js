'use strict';

// 对象属性键
// 创建
let id1 = Symbol('id');
let id2 = Symbol('id');
console.log(id1 === id2); // false
console.log(id1); // Symbol(id)
// console.log(id1 + ''); // Uncaught TypeError: Cannot convert a Symbol value to a string

id1 = id2 = Symbol.for('id');
console.log(id1);
console.log(id2);

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
