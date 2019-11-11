'use strict';

let man = {
  firstName: 'Creator',
  surname: 'of JavaScript'
  // get fullName() {
  //   return this.firstName + ' ' + this.surname;
  // },
  // set fullName(value) {
  //   [this.firstName, this.surname] = value.split(' ');
  // }
};

Object.defineProperty(man, 'fullName', {
  get() {
    return this.firstName + ' ' + this.surname;
  },
  set(value) {
    [this.firstName, this.surname] = value.split(' ');
  }
});

console.log(man.fullName); // Creator of JavaScript
man.fullName = 'Brendan Eich';
console.log(man.fullName); // Brendan Eich

Object.defineProperty({}, 'prop', {
  get() {
    return 1;
  },
  value: 1
}); // Error: Invalid property descriptor.

let user = {
  get name() {
    return this._name;
  },
  set name(value) {
    if (value.length < 4) {
      console.log('Name is too short, need at least 4 characters');
      return;
    }
    this._name = value;
  }
};

user.name = 'Pete';
console.log(user._name); // Pete
