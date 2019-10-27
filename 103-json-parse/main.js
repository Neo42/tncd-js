'use strict';

// console.log(
//   JSON.parse(
//     '{"person":{"who":"me"},"location":"Beijing","todo":["code","record","repeat"],}' // 末尾不能有逗号
//   )
// ); // Unexpected token }

console.log(
  JSON.parse(
    '{"person":{"who":"me"},"location":"Beijing","todo":["code","record","repeat"]}'
  )
);
// { person: { who: 'me' }, location: 'Beijing', todo: [ 'code', 'record', 'repeat' ] }

let data = `{"person":{"who":"me"},"location":"Beijing","todo":["code","record","repeat"],"time":"2017-01-01T00:00:00.000Z"}`;
let obj = JSON.parse(data);
console.log(obj.time); // 2017-01-01T00:00:00.000Z

// reviver：转换器
obj = JSON.parse(data, (key, value) => {
  if (key === 'time') return new Date(value);
  return value;
});
console.log(typeof obj.time, obj.time); // object Sun Jan 01 2017 08:00:00 GMT+0800 (China Standard Time)
