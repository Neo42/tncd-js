function sayHi() {
  console.log('Hi.');
}
// a = 1; // a is not defined 模块级作用域
let god = { name: 'Wednesday' };

export { sayHi, god };
