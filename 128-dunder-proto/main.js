'use strict';

let author = { name: 'Philip K Dick' };
let android = {
  dream: 'electronic sheep',
  say() {
    console.log(
      "Reality is that which, when you stop believing in it, doesn't go away."
    );
  },
  sleep() {
    return this.dream;
  }
};

console.log(author.dream); // undefined
author.__proto__ = android;
console.log(author); // { name: 'Philip K Dick' }
console.log(author.dream); // Electronic Sheep

author = { name: 'Philip K Dick', __proto__: android };
console.log(author.dream); // electronic sheep
author.say(); // Reality is that which, when you stop believing in it, doesn't go away.

author.say = function() {
  console.log('A man is an angel that has gone deranged.');
};

author.say(); // A man is an angel that has gone deranged.

let creature = { die: true };
android.__proto__ = creature;
console.log(android.die); // true

// this 始终是方法的调用者
author.dream = 'Android';
console.log(author.sleep()); // Android

console.log(author); // { name: 'Philip K Dick', say: [λ], dream: 'Android' }
console.log(author.__proto__); // { dream: 'electronic sheep', say: [λ: say], sleep: [λ: sleep] }

for (const key in author) {
  // console.log(key); // name, say, dream, sleep, die
  if (author.hasOwnProperty(key)) {
    console.log(key); // name, say, dream
  }
}
