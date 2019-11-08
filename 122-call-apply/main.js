'use strict';

function sayHi() {
  console.log(this.name);
}

let user = { name: 'John' };
let admin = { name: 'Admin' };

// use call to pass different objects as "this"
sayHi.call(user); // this = John
sayHi.call(admin); // this = Admin

let worker = {
  anotherMethod() {
    return 1;
  },
  heavyTask(input) {
    return `Task complete: ${input}`;
  }
};

function taskEnhancer(func) {
  let cache = new Map();
  return function(key) {
    if (!cache.has(key)) {
      let result = func.call(this, key);
      cache.set(key, result);
      return result;
    }
    return 'Cached! ' + cache.get(key);
  };
}

worker.heavyTask = taskEnhancer(worker.heavyTask);
console.log(worker.heavyTask('Lose 5kg'));
console.log(worker.heavyTask('Lose 5kg'));
