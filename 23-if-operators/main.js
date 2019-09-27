'use strict';

let isBoss = confirm('是大佬吗？');
if (isBoss === true) {
  alert('女装的？');
} else if (false) {
  alert('渣渣！');
} else {
  alert('信了你的邪');
}

// truthy, 运行
if (1) {
  console.log('I will run.');
}

// falsy，不会运行
if (0) {
  console.log('I will run.');
}
