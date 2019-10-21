'use strict';

let cache = new WeakMap();

// 数据处理函数
function calculate(obj) {
  obj = obj ? { name: 'neo' } : { name: 'someone else' };
  return obj;
}

// 记录、取出缓存数据
function process(obj) {
  if (!cache.has(obj)) {
    let result = calculate(obj);
    cache.set(obj, result);
  }
  return cache.get(obj);
}

let anderson = { name: 'Thomas A Anderson' };
process(anderson);
console.log(cache.get(anderson)); // { name: 'neo' }

// 批量删除缓存
anderson = null;
console.log(cache.get(anderson)); // undefined
