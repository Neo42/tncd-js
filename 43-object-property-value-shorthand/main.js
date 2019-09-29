'use strict';

let age = 3;
let baby = { age }; // { age: age }
console.log(baby);

function makeBaby(age) {
  return { age };
}
console.log(makeBaby(2));
