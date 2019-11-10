'use strict';

let man = {
  firstName: 'Creator',
  surname: 'of JavaScript',
  get fullName() {
    return this.firstName + ' ' + this.surname;
  },
  set fullName(value) {
    [this.firstName, this.surname] = value.split(' ');
  }
};

console.log(man.fullName); // Creator of JavaScript
man.fullName = 'Brendan Eich';
console.log(man.fullName); // Brendan Eich
