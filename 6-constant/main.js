// 可以被改变
const foo = {};
foo.bar = 42;
console.log(foo.bar);

// 但不能被重新赋值
foo = 1; //报错

const THEME_COLOR = '#00EFFE';
