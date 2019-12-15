function* geneFunc() {
  yield 1;
  yield 2;
  yield 3;
}

let valGenerator = geneFunc();

console.log(valGenerator); // GeneratorFunctionPrototype
console.log(valGenerator.next()); // { value: 1, done: false }
console.log(valGenerator.next()); // { value: 2, done: false }
console.log(valGenerator.next()); // { value: 3, done: false }
console.log(valGenerator.next()); // { value: undefined, done: true }
