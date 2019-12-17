import { god } from './sayHi.js';
console.log(`This in main.js is ${this}.`);
console.log(`main2.js god: ${god.name}`);
console.log(import.meta.url);
