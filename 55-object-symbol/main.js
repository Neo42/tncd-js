'use strict';

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
