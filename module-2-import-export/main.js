// import * as imported from './sayHi.js';
// import { god, sayHi, someFunction, someVar } from './sayHi.js';
// console.log(imported.god, imported.someVar);
// imported.sayHi();

import { sayHi as hi, expVar as myVar, func } from './sayHi.js';
hi();
console.log(myVar);
func();

import Person from './defaultExport.js'; // import { default as Person } from './defaultExport.js'，implicit import default, CAUTION!
import { anotherMan } from './defaultExport.js';
let john = new Person('John');
console.log(john);
console.log(anotherMan);

import { DefaultPerson } from './index.js';
let tom = new DefaultPerson('Tom');
console.log(tom);

import './run.js'; // Running.
