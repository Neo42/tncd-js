import { sayHi } from './sayHi.js';
import { god } from './sayHi.js';
sayHi();
god.name = 'Odin';
console.log(`main.js god: ${god.name}`);
console.log(import.meta.url);
