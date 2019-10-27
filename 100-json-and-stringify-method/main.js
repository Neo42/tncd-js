'use strict';

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON
// 一种轻量的数据交换格式，不是数据类型
// 一种完全独立于编程语言的文本格式："以 JSON 格式写成的文本"
// 独立于 Javascript
// 键值对的集合
// 有序列表或数组
// 在与 Javascript 中的对象对应

let obj = {
  person: { who: 'me' },
  location: 'Beijing',
  todo: ['learn', 'code', 'repeat']
};

for (const key in obj) {
  console.log(typeof key); // string, string, string
}

console.log(typeof obj); // object

// 将 JavaScript 对象转化为 JSON 格式的字符串
console.log(JSON.stringify(obj));

// 属性名称(键)、属性值中的字符串必须用双引号
// 值的类型：数字，字符串，数组，对象，布尔值，null
// 跳过:Symbol属性、值为 undefined 的属性、函数属性（方法）
// 可以换行
obj = {
  sayHi() {
    console.log('Hi');
  }, // 跳过
  age: 'unknown', // 会被转为双引号
  gender: null, // 保留
  sdfds: undefined, // 跳过
  [Symbol('id')]: 123, // 跳过
  todo: [{ title: 'laundary' }, { title: 'shower' }] // 嵌套对象会被自动转化
};

console.log(JSON.stringify(obj)); // {"age":"unknown","gender":null,"todo":[{"title":"laundary"},{"title":"shower"}]}
