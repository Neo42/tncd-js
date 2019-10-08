'use strict';

// new 的三步：适用于任何函数
// 创建, 赋值一个空对象给 this
// 执行函数
// 返回 this

function Person(name) {
  this.name = name;
  this.sayHi = function() {
    console.log(`Hi! I'm ${name}`);
  };
  console.log(new.target);
  return 1; // -> 原始类型或空 return 则 return this;
  // 如果是 return newObj {}; 则返回 newObj
}

let friend = new Person('Jarvis'); // 无参数时可以省略括号，代码风格问题
console.log(friend); // Person { name: 'jarvis' }
