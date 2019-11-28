let charged = true;
let car = {
  control: new Promise((go, stop) => {
    if (charged) {
      go();
    } else {
      stop();
    }
  }),

  goFoward(distance) {
    console.log(`Car moved forward for ${distance}.`);
  },

  goLeft(distance) {
    console.log(`Car moved left for ${distance}.`);
  },

  batteryDead() {
    console.log(`Battery is dead.`);
    charged = false;
  },
  breakDown() {
    console.log(`Car broke down`);
  }
};

car.control
  .then(() =>
    setTimeout(() => {
      car.goFoward(`500 meters`);
    }, 1000)
  )
  .then(() =>
    setTimeout(() => {
      car.goLeft(`500 meters`);
    }, 2000)
  )
  .then(() =>
    setTimeout(() => {
      car.batteryDead();
    }, 3000)
  );
