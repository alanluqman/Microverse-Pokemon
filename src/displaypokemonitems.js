import {
  showPopup, popupCommentBtn, addComment, getComments,
} from './popup.js';

const Pokecontainer = document.querySelector('#poke_container');
const pokemonCounter = document.getElementById('pokemonCount');
// const Pokemonsnumber = 12;

const createpokemoncard = (Pokemons) => {
  pokemonCounter.innerHTML = `( ${Pokemons.length} )`;
  Pokemons.forEach(async (element) => {
    await fetch(element.url).then((response) => response.json()).then((json) => {
      const pokemon = json;
      // console.log(p);
      const PokemonEl = document.createElement('div');
      PokemonEl.classList.add('pokemon');
      const pokeinnerHTML = `
        <div class="img-container">
        <img id="avatar${pokemon.id}" src="">
        </div>
        <div class="title">
        <h3 class="name">${pokemon.name}</h3>
        <button type="button" class="like-btn" >
          <span id="colorHeart" class="border-5 red-heart" ></span>
        </button>
        </div>
        <div class="info">
            <span class="number"># ${pokemon.id}</span>
            <div class="likesbox"><span id="like${pokemon.id}" class="pe-2" id="${pokemon.id}_pokemonLikes">0</span> Likes</div>
        </div>
        <a  class="Comments-button" id="comment${pokemon.id}" >Comments</a>
        `;

      PokemonEl.innerHTML = pokeinnerHTML;
      Pokecontainer.appendChild(PokemonEl);
      const avatar = document.getElementById(`avatar${pokemon.id}`);
      avatar.src = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`;

      const commentBtn = document.getElementById(`comment${pokemon.id}`);
      commentBtn.addEventListener('click', () => {
        const popup = document.getElementById('popup');
        popup.classList.add('display');

        const { name } = pokemon;
        const image = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`;
        const info = `
                <p class="popup-detail-item">Size : ${pokemon.size}</p>
                <p class="popup-detail-item">Max-harvest : ${pokemon.max_harvest}</p>
                <p class="popup-detail-item">Growth-time : ${pokemon.growth_time}</p>
                <p class="popup-detail-item">Smoothness : ${pokemon.smoothness}</p> `;

        showPopup(name, image, info);
        getComments(pokemon.id);

        popupCommentBtn.addEventListener('click', () => {
          addComment(pokemon.id);
        });
      });
    });
  });
};

const pokemonAPI = 'https://pokeapi.co/api/v2/berry/';

export const getPokemonList = async () => {
  await fetch(pokemonAPI).then((response) => response.json()).then((json) => {
    const pokemons = json.results;
    // console.log(pokemons);
    createpokemoncard(pokemons);
  });
};

// const involvementLikeAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/v1QM9q7o5iYcOME1s2k2/likes';

export default { createpokemoncard, getPokemonList };

// const getpokemon = async (id) => {
//   const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
//   const res = await fetch(url);
//   const Pokemon = await res.json();
//   createpokemoncard(Pokemon);
// };

// const fetchpokemons = async () => {
//   for (let i = 1; i <= Pokemonsnumber; i += 1) {
//     getpokemon(i);
//   }
// };

// fetchpokemons();

// export default {
//   fetchpokemons, createpokemoncard, getpokemon,
// };