'use strict';

let name = prompt('Please tell me your name.');
try {
  if (!name) {
    throw new SyntaxError('You have to give me your name.');
  }
  console.log(name);
} catch (e) {
  console.error(e.message);
}
