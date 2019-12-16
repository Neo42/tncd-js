// generator with iterable

// let range = {
//   from: 1,
//   to: 5,
//   *[Symbol.iterator]() {
//     for (let value = this.from; value <= this.to; value++) {
//       yield value;
//     }
//   }
// };

// console.log(...range);

function* generateSequence(start, end) {
  for (let i = start; i <= end; i++) yield i;
}

// generator composition (embeding)
function* generatePasswordCodes() {
  yield* generateSequence(48, 57);
  yield* generateSequence(65, 90);
  yield* generateSequence(97, 122);
}

let chars = generatePasswordCodes();
let str = '';
for (const char of chars) {
  str += String.fromCharCode(char);
}

console.log(str);
