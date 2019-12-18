'use strict';

// try {
//   a = 1;
// } catch (error) {
//   console.log(error.name);
//   console.log(error.message);
//   console.log(error.stack);
// }

class Error {
  constructor(message) {
    this.message = message;
    this.name = 'Error';
  }
}

class ValidationError extends Error {
  constructor(message) {
    super(message);
    this.name = 'ValidationError';
  }
}

let jeff = { name: 'Jeff VanderMeer' };

function validateAuthor(author) {
  console.log(a);
  if (!author.name) {
    throw new ValidationError("The author's name is missing.");
  } else if (!author.works) {
    throw new ValidationError("The author's works are missing.");
  }
  return true;
}

try {
  if (validateAuthor(jeff)) {
    console.log('The author is valid.');
  }
} catch (e) {
  if (e instanceof ValidationError) {
    console.log(e.name); // ValidationError
    console.log(e.message); // The author's works are missing.
  } else {
    console.log(`An syntax error: ${e.message}`); // An syntax error: a is not defined
  }
}
