'use strict';

function f(a, db, as) {
  console.log(arguments.length); // 1, 实参个数
  console.log(f.blah); // 1, 实参个数
  return 'f';
}
// let f = () => 'f';

f(1); // 1, undefined
console.log(typeof f); // function
console.log(f.name); // f
console.log(f.length); // 3 形参个数

f.blah = function() {
  console.log('I am a property.');
};
f.blah(); // I am a property.
f(); // 0, blah

let anotherFunc = function() {
  return 1;
};

console.log(anotherFunc.name);

anotherFunc = function name(bruh) {
  if (bruh) {
    console.log(bruh);
  } else {
    name('No bruh');
  }
};

console.log(anotherFunc.name); // name
anotherFunc(); // No bruh
// name(); // name is not a function
