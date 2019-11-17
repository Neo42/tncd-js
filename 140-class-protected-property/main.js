class Saber {
  _fullness = 60;

  constructor(food) {
    this.food = food;
  }

  // set fullness(value) {
  //   if (value < 0) {
  //     console.error('The fullness must be equal to or above 0.');
  //     return;
  //   }
  //   this._fullness = value;
  // }

  get fullness() {
    return this._fullness;
  }

  say() {
    console.log(
      `Thanks for the ${this.food}. I am now ${this.fullness}% full.`
    );
  }
}

let myKing = new Saber('biscuit');
myKing.say(); // Thanks for the biscuit. I am now 60% full.
// myKing.fullness = 100; // Cannot set property fullness，只读
// myKing.say(); // Thanks for the biscuit. I am now 100% full.
