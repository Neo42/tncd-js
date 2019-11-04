'use strict';

function closureFunc() {
  let localVar = 'localVar';
  console.log(localVar);
}

closureFunc(); // localVar
// console.log(localVar); // 未定义

// 所有函数执行环境中都有一个隐式属性 [[environment]]
