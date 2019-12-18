function showPokemon(res) {
  let imgUrl = res.sprites.front_default;
  let img = document.createElement('img');
  img.height = 300;
  img.src = imgUrl;
  document.body.appendChild(img);
}

function showError(e) {
  console.log(`Request failed: ${e}`);
}

$.getJSON({
  url: `https://pokeapi.co/api/v2/pokemon/1/`,
  success: res => {
    showPokemon(res);
    $.getJSON({
      url: `https://pokeapi.co/api/v2/pokemon/7/`,
      success: res => {
        showPokemon(res);
        $.getJSON({
          url: `https://pokeapi.co/api/v2/pokemon/25/`,
          success: res => {
            showPokemon(res);
          },
          error: showError
        });
      },
      error: showError
    });
  },
  error: showError
});

// callback hell 回调地狱
// nesting 嵌套
// inversion of control 控制翻转：很难控制回调函数的是否执行、何时执行、信任问题
// not reasonable 不易分析
// error handling is hard 错误处理很难
