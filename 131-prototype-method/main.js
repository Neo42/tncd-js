'use strict';

let human = {
  sleep: true
};

let me = Object.create(human);
console.log(me.sleep); // true
console.log(me); // {}

console.log(Object.getPrototypeOf(me) === human); // true
Object.setPrototypeOf(me, {});
console.log(Object.getPrototypeOf(me));
console.log(Object.getPrototypeOf(me) === {}); // false
