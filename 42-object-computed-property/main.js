'use strict';

let fruit = prompt('Which fruit to buy?', 'apple');
let bag = {};

// 从 fruit 变量中获取值
bag[fruit] = 5; // fruit 是个变量
console.log(bag[fruit]); // 5

bag = {
  [fruit]: 5
};
console.log(bag[fruit]); // 5
