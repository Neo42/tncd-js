'use strict';

function wrapperFunc() {
  let func = function() {
    return 1;
  };
  return func;
}

console.log(innerVar); // 未定义
