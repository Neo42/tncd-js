'use strict';

function func(a, b, c) {
  console.log(typeof arguments, arguments);
  console.log(Object.entries(arguments)); // [ [ '0', 'a' ], [ '1', 'b' ], [ '2', 'c' ] ]
  console.log(arguments.length); // 3

  console.log(arguments[Symbol.iterator]); // ƒ values() { [native code] }
  // console.log(arguments.callee); // Uncaught TypeError: 'caller', 'callee', and 'arguments' properties may not be accessed on strict mode functions or the arguments objects for calls to them

  for (const i of arguments) {
    console.log(i); // a,b,c
  }
}

func('a', 'b', 'c');
