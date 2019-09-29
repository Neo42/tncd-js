'use strict';

let baby = {
  age: 3,
  // sayHi:function(){}
  // sayHi:()=>{}
  sayHi() {
    console.log('Aaaaa');
  }
};

function sayHi() {
  console.log('Aaaaa');
}

baby = {
  age: 3,
  sayHi // sayHi: sayHi
};

baby.sayHi();
