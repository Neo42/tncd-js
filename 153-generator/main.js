function* geneFunc() {
  let num = yield 1;
  console.log(num); // 4
  num = yield 2; // 第 2 次 next 的 value
  console.log(num); // 6
  num = yield 3; // 第 3 次 next 的 value
  console.log(num); // 8
}

let valGenerator = geneFunc();

// console.log(valGenerator); // GeneratorFunctionPrototype
// console.log(valGenerator.next()); // { value: 1, done: false }
// console.log(valGenerator.next()); // { value: 2, done: false }
// console.log(valGenerator.next()); // { value: 3, done: false }
// console.log(valGenerator.next()); // { value: undefined, done: true }

// for (const value of valGenerator) {
//   console.log(value); // 1,2,3
// }

// console.log(valGenerator); // geneFunc {<closed>}
// console.log(valGenerator.next()); // { value: undefined, done: true }
// console.log(valGenerator.next()); // { value: undefined, done: true }
// console.log(valGenerator.next()); // { value: undefined, done: true }
// console.log(valGenerator.next()); // { value: undefined, done: true }

// for (const value of valGenerator) {
//   console.log(value);
// } // 不会输出任何值,因为 done: true

console.log(valGenerator.next().value); // 1 启动 generator, value 取值为第一个被 yield 出的值
console.log(valGenerator.next(4).value); // 2 传入 value = 4, value 取值为第二个被 yield 出的值
console.log(valGenerator.next(6).value); // 3 传入 value = 6, value 取值为第三个被 yield 出的值
console.log(valGenerator.next(8).value); // undefined 传入 value = 8
