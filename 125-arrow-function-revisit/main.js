'use strict';

// let obj = { name: 'F', say: () => console.log(this.name) };

// obj.say(); // Can't read property of undefined

// 浏览器中调试以下代码
let func = () => {
  console.log(arguments);
};

func(); // arguments is not defined
