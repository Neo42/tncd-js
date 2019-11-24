'use strict';

function loadScript(
  src,
  // 这里加了一个回调函数
  callback
) {
  let script = document.createElement('script');
  script.src = src;
  // 当脚本加载完成之后再运行回调函数
  script.onload = () => callback(null);
  script.onerror = () =>
    callback(new Error(`Error when loading script from ${src}`));
  document.head.append(script);
}

// 回调地狱、DOOM PYRAMID 末日金字塔
(function() {
  loadScript('https://threejs.org/build/three.js', e => {
    // 给 error 提供一个入口以便传入错误数据以供处理
    if (e) {
      throw e;
    }
    console.log(THREE);
    loadScript('https://cdn.jsdelivr.net/npm/vue/dist/vue.js', e => {
      if (e) {
        throw e;
      }
      console.log(Vue);
      loadScript('https://unpkg.com/react@16/umd/react.development.js', e => {
        if (e) {
          throw e;
        }
        console.log(React);
      });
    });
  });
})();

// 同步操作时会显示 THREE 未定义，因为 log 不会等 three.js 脚本加载完成之后再运行，而是 three.js 开始加载之后直接运行 log
