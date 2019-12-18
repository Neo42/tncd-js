// import * as imported from 23423; // 只能用字符串

// import * as imported from './script.js';
import('./script.js')
  .then(mod => {
    console.log(mod); // Module {Symbol(Symbol.toStringTag): "Module"}
    return mod;
  })
  .then(mod => {
    mod.log(); // logging
    mod.scream(); // ahhhhhh
  });

async function name() {
  let { log, scream } = await import('./script.js');
  log();
  scream();
}

name(); // logging ahhhhh
