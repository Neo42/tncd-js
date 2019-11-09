'use strict';

function sayHi() {
  console.log(this.name);
}

let user = { name: 'John' };
let admin = { name: 'Admin' };

sayHi.apply(user); // this = John
sayHi.apply(admin); // this = Admin

let worker = {
  complete() {
    return '✅';
  },
  heavyTask(...args) {
    let result = args
      .sort()
      .map(str => `${str}: ✅`)
      .join('\n');
    return result;
  }
};

function taskEnhancerV2(func) {
  let cache = new Map();
  return function(...args) {
    let key = hashKey(args);
    let value = func.apply(this, args);
    if (!cache.has(key)) {
      cache.set(key, value);
      return value;
    }
    return 'This record is pulled from cache!\n' + cache.get(key);
  };
}

function hashKey(args) {
  let key = args.sort().join(', ');
  console.log(key);
  return key;
}

worker.heavyTask = taskEnhancerV2(worker.heavyTask);
console.log(worker.heavyTask('Losing 5kg', 'Sleep before 12:00'));
console.log(worker.heavyTask('Sleep before 12:00', 'Losing 5kg'));
