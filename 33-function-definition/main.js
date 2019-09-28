'use strict';

// local, global variable
// argument, parameter
// return
// naming: 动作 + 对象

let j = 0;
function func(param = console.log('Param undefined.')) {
  let i = 0;
  let sum = i + j;
  console.log(sum, param);
  return true;
}
// console.log(i);
// console.log(sum);

let result = func();
console.log(result);
