let toggle = false;
let promise = new Promise((goodFunc, badFunc) =>
  toggle
    ? setTimeout(() => goodFunc('complete'), 5000)
    : badFunc(new Error('Toggle is off.'))
);

console.log(toggle);
promise
  .then(success => console.log(`Mission ${success}.`))
  .catch(failure => {
    throw failure;
  });
