'use strict';

function slow(x) {
  // 需要记住的结果
  console.log(`Called with ${x}`);
  return x;
}

function cachingDecorator(func) {
  let cache = new Map();

  return function(x) {
    if (cache.has(x)) {
      // if there's such key in cache
      return cache.get(x); // read the result from it
    }

    let result = func(x); // otherwise call func

    cache.set(x, result); // and cache (remember) the result
    return result;
  };
}

slow = cachingDecorator(slow); // 变形后的函数

console.log(slow(1)); // 返回结果前会先缓存
console.log('Again: ' + slow(1)); // 返回缓存的结果

console.log(slow(2)); // 缓存后返回结果
console.log('Again: ' + slow(2)); // 返回缓存的结果
