'use strict';

(function iife() {
  let innerVar = 'I am a variable';
  console.log(innerVar); // I am a variable
})();

console.log(innerVar); // 未定义