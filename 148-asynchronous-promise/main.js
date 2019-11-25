'use strict';

function loadScript(src) {
  return new Promise((resolve, reject) => {
    let script = document.createElement('script');
    script.src = src;
    // 当脚本加载完成之后再运行回调函数
    script.onload = resolve;
    script.onerror = () => reject(src);
    document.head.append(script);
  });
}

// 回调地狱、DOOM PYRAMID 末日金字塔

let scriptPromise = Promise.all([
  loadScript('https://threejs.org/build/three.jss'),
  loadScript('https://cdn.jsdelivr.net/npm/vue/dist/vue.js'),
  loadScript('https://unpkg.com/react@16/umd/react.development.js')
])
  .then(() => {
    console.log(Vue);
    console.log(React);
    console.log(THREE);
  })
  .catch(src => {
    console.log(`Failed to load script from ${src}`);
  });

// 同步操作时会显示 THREE 未定义，因为 log 不会等 three.js 脚本加载完成之后再运行，而是 three.js 开始加载之后直接运行 log

//
//
//
