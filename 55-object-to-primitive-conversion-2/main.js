'use strict';

// obj[Symbol.toPrimitive](hint)
// string: obj.toString() -> obj.valueOf()
// number||default: obj.valueOf() -> obj.toString()

let user = {
  name: 'John',
  money: 1000,
  [Symbol.toPrimitive](hint) {
    console.log(`hint: ${hint}`);
    return hint == 'string' ? `{name: "${this.name}"}` : this.money; // 返回的值最后会被转换为 hint 所对应的类型
  }
};

alert(user); // alert hint: string -> {name: "John"}
console.log(+user); // unary+ hint: number -> 1000
alert(user + 500); // binary+ hint: default -> 1500

user = {
  name: 'John',
  money: 1000,

  // 对于 hint="string"，调试时一般只实现这个方法就足够了
  toString() {
    return `{name: "${this.name}"}`;
  },

  // 对于 hint="number" 或 "default"
  valueOf() {
    return this.money;
  }
};

alert(user); // alert hint: string, toString -> {name: "John"}
alert(+user); // unary+ hint: number, valueOf -> 1000
alert(user + 500); // binary+ hint: default, valueOf -> 1500

let obj = {
  // toString handles all conversions in the absence of other methods
  toString() {
    return '2';
  }
};

alert(obj + 2); // 22
alert(obj * 2); // 4
