'use strict';

let game = {
  name: 'MGS5',
  author: 'Hideo Kojima',
  country: 'Japan'
};

for (let key in game) {
  console.log(`${key}: ${game[key]}\n`);
}
console.log('\n');

// 整数属性默认升序输出
let codes = {
  '49': 'Germany',
  '86': 'China',
  '1': 'US'
};

logObject(codes);

codes = {
  '+49': 'Germany', // 这里的加号是用来帮forin区分排序的
  '+86': 'China',
  '+1': 'US'
};

logObject(codes);

function logObject(object) {
  for (let key in object) {
    console.log(`${+key}: ${object[key]}\n`); // 这里key的加号是用来消掉之后的加号的
  }
  console.log('\n');
}
