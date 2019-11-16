'use strict';

// 类属性：实验性功能

class User {
  name = 'Anonymous';
  weapon = 'Sword';

  sayHi() {
    console.log(`Hello, ${this.name}!`);
  }
}

let me = new User();
console.log(me.name); // Anonymous
