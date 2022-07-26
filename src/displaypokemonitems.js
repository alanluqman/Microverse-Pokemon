import addNewLike from './addnewlike.js';

const Pokecontainer = document.querySelector('#poke_container');
const Pokemonsnumber = 10;

function indexer(Pokemon) {
    Pokemon.results.forEach((Pokemon, index) => {
        Pokemon.index = index + 1;
    });
    return Pokemon.results;
  }

function addLikesListener() { 
    const likeButtons = document.querySelectorAll('.like-btn');
    likeButtons.forEach((likeButton) => {
      likeButton.addEventListener('click', () => {
        addNewLike(parseInt(likeButton.dataset.pokemonId));
      });
    });
  }

  function displayLikes(likes) {
    likes.forEach((like) => {
      const pokemonLikes = document.getElementById(`${like.item_id}_pokemonLikes`);
      if (pokemonLikes) {
        pokemonLikes.textContent = like.likes;
        const colorHeart = document.getElementById(`${like.item_id}_colorHeart`);
        colorHeart.classList.remove('white-heart');
        colorHeart.classList.add('red-heart');
      }
    });
  }

  const recievedLikes = () => fetch('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/Rc80fbrNCFUatmtBrttJ/likes/', {
    method: 'GET',
  })
    .then((res) => res.json())
    .then((json) => displayLikes(json));

const createpokemoncard = (Pokemon) => {
  const PokemonEl = document.createElement('div');
  PokemonEl.classList.add('pokemon');
  const name = Pokemon.name[0].toUpperCase() + Pokemon.name.slice(1);
  //   const poketype = Pokemon.types.map((type) => type.type.name);

  const pokeinnerHTML = `
      <div class="img-container">
      <img src="https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${Pokemon.id}.svg">
      </div>
      
      <div class="title">
      <h3 class="name">${name}</h3>
      <button type="button" class="like-btn" data-pokemon-id=${Pokemon.id} id="${Pokemon.id}_likeButton" >
        <span id="${Pokemon.id}_colorHeart"  class="border-5 red-heart" ></span>
      </button>
      
      </div>
      <div class="info">
          <span class="number"># ${Pokemon.id}</span>
          <div class="likesbox"><span class="pe-2" id="${Pokemon.index}_pokemonLikes">0</span> Likes</div>
      </div>
      <button type="button" class="Comments-button" >Comments</button>
      `;

  PokemonEl.innerHTML = pokeinnerHTML;
  Pokecontainer.appendChild(PokemonEl);
};
recievedLikes();
const getpokemon = async (id) => {
    await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((response) => response.json())
    .then((Pokemon) => {
        createpokemoncard(Pokemon);
    }).then(() => addLikesListener());
  };

const fetchpokemons = async () => {
  for (let i = 1; i <= Pokemonsnumber; i += 1) {
    getpokemon(i);
  }
};

fetchpokemons();

export default {
  fetchpokemons, createpokemoncard, getpokemon,indexer,displayLikes
};