function* log() {
  try {
    let val = yield 'blah';
  } catch (error) {
    console.error(error);
  }
}

let generator = log();
generator.next(); // 启动 generator
generator.throw(new Error('This is an error.')); // Error: This is an error.
