'use strict';

function heavyTask(input) {
  return `Task complete: ${input}`;
}

function taskEnhancer(func) {
  let map = new Map();

  return function(key) {
    if (!map.has(key)) {
      // 如果输入是新的，则缓存并返回新的运行结果
      let output = func(key);
      map.set(key, output);
      return output;
    }
    // 从缓存中返回已有结果
    return `Cached! ` + map.get(key);
  };
}

let enhancedHeavyTask = taskEnhancer(heavyTask);

console.log(enhancedHeavyTask('Work out')); // Task complete: Work out
console.log(enhancedHeavyTask('Work out')); // Cached! Task complete: Work out
