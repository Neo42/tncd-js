// 类属性：实验性功能

class Saber {
  name = 'Saber';
  weapon = 'Sword';

  constructor() {
    this.gender = 'girl';
  }

  sayHi() {
    console.log(`Hello, ${this.name}!`);
  }
}

let myKing = new Saber('girl');
console.log(myKing.name); // Saber
console.log(myKing.weapon); // Sword
console.log(myKing.gender); // girl
