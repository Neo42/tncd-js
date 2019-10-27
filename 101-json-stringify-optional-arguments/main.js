'use strict';

// 不允许对象把自身作为自己的属性值:循环引用
let obj = {
  sayHi() {
    console.log('Hi');
  }, // 跳过
  age: 'unknown', // 会被转为双引号
  gender: null, // 保留
  sdfds: undefined, // 跳过
  [Symbol('id')]: 123, // 跳过
  todo: [{ title: 'laundary' }, { title: 'shower' }] // 嵌套对象会被自动转化
};

// obj.todo = obj;
// console.log(JSON.stringify(obj)); // {"age":"unknown","gender":null,"todo":[{"title":"laundary"},{"title":"shower"}]} // 循环结构
// // 属性之间可以随意调换
// obj.todo = obj.gender;
// console.log(JSON.stringify(obj)); // {"age":"unknown","gender":null,"todo":[{"title":"laundary"},{"title":"shower"}]}

// JSON.stringify(value[, replacer, space])

// replacer:
// 一个由 obj 的属性键的数组，用于筛选出要参与转化的属性值，不在其列的则不参与转化
console.log(JSON.stringify(obj, ['age'])); // {"age":"unknown"}
console.log(JSON.stringify(obj, ['title'])); // {}，不允许跨级
console.log(JSON.stringify(obj, ['todo'])); // {"todo":[{},{}]}，只写嵌套对象名称的话不会转化其中的属性，除非像下一行那样写清楚属性
console.log(JSON.stringify(obj, ['todo', 'title'])); // {"todo":[{"title":"laundary"},{"title":"shower"}]},

// replace也可以是一个返回要转化的属性名的回调函数
console.log(
  JSON.stringify(obj, (key, value) => {
    console.log(`${key}, ${value}, ${key === ''}`);
    // , [object Object], true
    return key === 'gender' ? 'male' : value; // 把 gender 属性值改为 'male'
  })
); // {"age":"unknown","gender":"male","todo":[{"title":"laundary"},{"title":"shower"}]}

// https://www.youtube.com/watch?v=kegJuCsGWqQ
// https://guide.freecodecamp.org/javascript/standard-objects/json/json-stringify/
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify

console.log(JSON.stringify(obj, null)); // 默认不进行格式化
console.log(JSON.stringify(obj, null, 5)); // 格式化且把缩进设置为 5 个空格

// {
//      "age": "unknown",
//      "gender": "male",
//      "todo": [
//           {
//                "title": "laundary"
//           },
//           {
//                "title": "shower"
//           }
//      ]
// }
