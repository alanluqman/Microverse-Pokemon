const Pokecontainer = document.querySelector('#poke_container');
const Pokemonsnumber = 12;

const createpokemoncard = (Pokemon) => {
  const PokemonEl = document.createElement('div');
  PokemonEl.classList.add('pokemon');
  const name = Pokemon.name[0].toUpperCase() + Pokemon.name.slice(1);
  const poketype = Pokemon.types.map((type) => type.type.name);

  const pokeinnerHTML = `
      <div class="img-container">
      <img src="https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${Pokemon.id}.svg">
      </div>
      
      <div class="title">
      <h3 class="name">${name}</h3>
      <button type="button" class="like-btn" >
        <span id="colorHeart" class="border-5 red-heart" ></span>
      </button>
      </div>
      <div class="info">
          <span class="number"># ${Pokemon.id}</span>
          <div class="likesbox"><span class="pe-2" id="${Pokemon.id}_pokemonLikes">0</span> Likes</div>
      </div>
      <button type="button" class="Comments-button" >Comments</button>
      `;

  PokemonEl.innerHTML = pokeinnerHTML;
  Pokecontainer.appendChild(PokemonEl);
};

const getpokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const res = await fetch(url);
  const Pokemon = await res.json();
  createpokemoncard(Pokemon);
};

const fetchpokemons = async () => {
  for (let i = 1; i <= Pokemonsnumber; i += 1) {
    getpokemon(i);
  }
};

fetchpokemons();

export default {
  fetchpokemons, createpokemoncard, getpokemon,
};