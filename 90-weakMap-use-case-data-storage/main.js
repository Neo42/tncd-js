'use strict';

// 对象相关数据的存储
let matrix = new WeakMap();
let neo = { name: 'neo' };
matrix.set(neo, '');
console.log(matrix.get(neo)); // blue pill
neo = null;
console.log(matrix.get(neo)); // undefined

// 创建访问计数器
let visitsCountMap = new WeakMap(); // weakmap: user => visits count

function countVisit(person) {
  let count = visitsCountMap.get(person) || 0;
  visitsCountMap.set(person, count + 1);
  console.log(visitsCountMap.get(person));
}

neo = { name: 'neo' };
countVisit(neo); // count his visits
countVisit(neo);
console.log(visitsCountMap.get(neo));

// 删除 neo 和相关信息
neo = null;
console.log(visitsCountMap.get(neo));
