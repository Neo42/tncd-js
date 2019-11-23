// throw 42; // 42
// throw "I don't know"; // I don't know
// throw true; // true

// throw SyntaxError(); // Uncaught SyntaxError

// function log(something) {
//   console.log(something);
// }

// throw new log("I'm an error."); // I'm an error.

// Create an object type UserException
function UserException(message) {
  this.message = message;
  this.name = 'UserException';
}

// Make the exception convert to a pretty string when used as
// a string (e.g. by the error console)
UserException.prototype.toString = function() {
  return this.name + ': "' + this.message + '"';
};

// Create an instance of the object type and throw it
alert(new UserException('Value too high')); // UserException: "Value too high"
