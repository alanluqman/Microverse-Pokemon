import { showPopup, getComments, addLike, popup, getCommentID} from './popup.js';

const Pokecontainer = document.querySelector('#poke_container');
const pokemonCounter = document.getElementById('pokemonCount');


//// Create pokemon Cards
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
        <img id="avatar${pokemon.id}" src="https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg">
        </div>
        <div class="title">
        <h3 class="name">${pokemon.name}</h3>
        <a class="like-btn" id="likeBtn${pokemon.id}"><i class="fa fa-heart"></i></a>
        </div>
        <div class="info">
            <span class="number"># ${pokemon.id}</span>
            <div class="likesbox"><span  id="${pokemon.id}" class="pe-2">0</span> Likes</div>
        </div>
        <a  class="Comments-button" id="comment${pokemon.id}" >Comments</a>
        `;
         
        PokemonEl.innerHTML = pokeinnerHTML;
        Pokecontainer.appendChild(PokemonEl);

       
///// Like button
      const likeBtns = document.getElementById(`likeBtn${pokemon.id}`);
        likeBtns.addEventListener('click', () => {
        addLike(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/oheYik9wd8sLSwZdAJ1P/likes`,pokemon.id);
      });
//// Comment button
      const commentBtn = document.getElementById(`comment${pokemon.id}`);
      commentBtn.addEventListener('click', () => {
            popup.classList.toggle('display');
            const itemName = pokemon.name;
            const image = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${pokemon.id}.svg`;
            const info = `
                    <p class="popup-detail-item">Size : ${pokemon.size}</p>
                    <p class="popup-detail-item">Max-harvest : ${pokemon.max_harvest}</p>
                    <p class="popup-detail-item">Growth-time : ${pokemon.growth_time}</p>
                    <p class="popup-detail-item">Smoothness : ${pokemon.smoothness}</p> `;
            showPopup(itemName, image, info);
            getComments(pokemon.id);
            getCommentID (pokemon.id);
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

export default { createpokemoncard, getPokemonList };