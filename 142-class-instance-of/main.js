console.log([1] instanceof Array); // true
console.log([1] instanceof Object); // true

// 1. 检查 Symbol.hasInstance 方法
function Saber() {}
console.log(new Saber() instanceof Saber); // true

class Servant {
  static [Symbol.hasInstance](obj) {
    if (obj.attack) return true;
  }
}

let saber = {
  attack: function() {
    console.log('Ahhh!');
  }
};

console.log(saber instanceof Servant); // true
// 2. 检查原型__proto__ === constructor.prototype
console.log(saber.__proto__ === Servant.prototype);
