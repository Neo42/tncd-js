'use strict';

// 类属性：实验性功能

class Saber {
  name = 'Saber';
  weapon = 'Sword';

  sayHi() {
    console.log(`Hello, ${this.name}!`);
  }
}

let myKing = new Saber();
console.log(myKing.name); // Saber
