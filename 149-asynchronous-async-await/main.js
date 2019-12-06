function showPokemon(json) {
  let imgUrl = json.sprites.front_default;
  let img = document.createElement('img');
  img.height = 300;
  img.src = imgUrl;
  document.body.appendChild(img);
}

function showError(e) {
  console.log(`Request failed ${e}`);
}

async function getPokemon(id) {
  /*return new Promise((resolve, reject) => {})*/
  try {
    let pokemon = await new Promise(resolve => {
      $.getJSON({
        url: `https://pokeapi.co/api/v2/pokemon/${id}/`,
        success: resolve
      });
    });
    {
      // 相当于 resolve
      console.log(pokemon);
      showPokemon(pokemon);
    }
  } catch (e) {
    showError(e);
  }
}

getPokemon(1);
getPokemon(7);
getPokemon(25);
