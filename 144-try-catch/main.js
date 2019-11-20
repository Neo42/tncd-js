'use strict';

try {
  a = 1;
} catch (error) {
  console.log(`${error.name}\n${error.message}\n${error.stack}`);
}
