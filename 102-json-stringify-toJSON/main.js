'use strict';

let obj = {
  date: new Date('2017')
};

console.log(typeof obj.date); // object
console.log(JSON.stringify(obj)); // {"date":"2017-01-01T00:00:00.000Z"}
// date 自动转化成了字符串，因为所有 Date 对象都内建了 toJSON 方法，Date 用这个方法规定了当 JSON.stringify() 时返回字符串

let me = {
  toJSON() {
    return this.name;
  },
  name: 'MOSHI'
};

console.log(JSON.stringify(me)); // "MOSHI"

obj.person = me;
console.log(JSON.stringify(obj)); // {"date":"2017-01-01T00:00:00.000Z","person":"MOSHI"}
