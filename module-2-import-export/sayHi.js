// export 要放在声明之前
export let god = { name: 'Wednesday' };
export function sayHi() {
  console.log('Hi.');
} // export funciton 或者 class 末尾不加逗号

// 声明和 export 分离
function someFunction() {}
let someVar = 1;
export { someFunction as func, someVar as expVar };
