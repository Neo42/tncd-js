'use strict';

// 回调函数
function func(callback) {
  return callback('Inner Prompt:');
}

let result = func(prompt);
console.log(result);
