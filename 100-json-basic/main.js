'use strict';

// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/JSON
// 一种轻量级的数据交换格式、完全独立于语言的文本格式：以 JSON 格式写成的文本
// 独立于 Javascript
// 键值对的集合
// 有序列表或数组
// 在 Javascript 中与对象对应

let obj = {
  person: { who: 'me' },
  location: 'Beijing',
  todo: ['learn', 'code', 'repeat']
};

for (const key in obj) {
  console.log(typeof key); // string, string, string
}

console.log(typeof obj); // object

// JSON.stringify： 对象转为 JSON 格式的字符串
console.log(typeof JSON.stringify(obj), JSON.stringify(obj)); // string {"person":{"who":"me"},"location":"Beijing","todo":["learn","code","repeat"]}

// JSON.parse：JSON 格式的字符串转为对象
// 键值对必须用双引号
// 值必须是数字，字符串，数组，对象，布尔值，null
// 可以换行

let data = `{"person":{"who":"me"},"location":"Beijing",
"todo":["learn","code","repeat"]}`;
console.log(JSON.parse(data)); // { person: { who: 'me' },location: 'Beijing',todo: [ 'learn', 'code', 'repeat' ] }
