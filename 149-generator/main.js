function* valGenerator() {
  let val = yield 1;
  console.log(val);
  val = yield 2;
  console.log(val);
  val = yield 3;
  console.log(val);
}

let generator = valGenerator();
console.log(generator); // GeneratorFunctionPrototype
console.log(...generator); // 1 2 3
