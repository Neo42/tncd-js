'use strict';

let person = { name: 'Neo42' };
let descriptor = Object.getOwnPropertyDescriptor(person, 'name');

console.log(typeof descriptor, '\n' + JSON.stringify(descriptor, null, '\t'));
// Object
// {
// 	"value": "Neo42",
// 	"writable": true,
// 	"enumerable": true,
// 	"configurable": true
// }
