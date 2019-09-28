'use strict';

let func = (callback1, callback2) => {
  callback1('箭头');
  callback2('函数');
};

func(console.log, alert);

let func2 = () => {
  console.log('我没有参数');
};

// 一个参数可以省略参数括号
// 一条函数体可以省略函数体括号和return
let func3 = str => str;

console.log(func3('我没有括号和return'));

// 怎么选择、区别、细节以后讲
