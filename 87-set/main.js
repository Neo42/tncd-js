'use strict';

let people = new Set();
let john = { name: 'John' };
let pete = { name: 'Pete' };
let mary = { name: 'Mary' };

console.log(
  people
    .add(john)
    .add(pete)
    .add(mary)
    .add(john)
    .add(mary)
); // Set { { name: 'John' }, { name: 'Pete' }, { name: 'Mary' } }
console.log(people.size); // 3

for (const person of people) {
  console.log(person.name); //  John, Pete, Mary
}

// set.forEach((value,key,set) => {}, thisArg)
people.forEach((value1, value2, set) => console.log(value1, value2));
// { name: 'John' } { name: 'John' }
// { name: 'Pete' } { name: 'Pete' }
// { name: 'Mary' } { name: 'Mary' }

// set.keys() 或 set.values()：返回一个包含所有值的可迭代对象
for (const key of people.keys()) {
  console.log(key); //  { name: 'John' }, { name: 'Pete' }, { name: 'Mary' }
}
