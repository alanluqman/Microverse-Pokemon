const Pokecontainer = document.querySelector('#poke_container');
// const Pokemonsnumber = 12;

const createpokemoncard = (Pokemons) => {
  Pokemons.forEach(async (element) => {
    await fetch(element.url).then((response) => response.json()).then((json) => {
      const p = json;
      console.log(p);
const PokemonEl = document.createElement('div');
    PokemonEl.classList.add('pokemon');
    const pokeinnerHTML = `
        <div class="img-container">
        <img id="avatar${p.id}" src="">
        </div>
        <div class="title">
        <h3 class="name">${p.name}</h3>
        <button type="button" class="like-btn" >
          <span id="colorHeart" class="border-5 red-heart" ></span>
        </button>
        </div>
        <div class="info">
            <span class="number"># ${p.id}</span>
            <div class="likesbox"><span id="like${p.id}" class="pe-2" id="${p.id}_pokemonLikes">0</span> Likes</div>
        </div>
        <a  class="Comments-button" id="comment${p.id}" >Comments</a>
        `;
  
        PokemonEl.innerHTML = pokeinnerHTML;
        Pokecontainer.appendChild(PokemonEl);
        const avatar = document.getElementById(`avatar${p.id}`);
        avatar.src = `https://unpkg.com/pokeapi-sprites@2.0.2/sprites/pokemon/other/dream-world/${p.id}.svg`;

        const commentBtn = document.getElementById(`comment${p.id}`);
        commentBtn.addEventListener('click', () => {
          console.log(p.id);
          const popup = document.getElementById('popup');
          popup.classList.add('display');
        })
        
    });
  }); 
  
};
 
    
      
     
   

const  pokemonAPI = 'https://pokeapi.co/api/v2/berry/';
 
 export const getPokemonList = async () => {
    await fetch(pokemonAPI).then((response) => response.json()).then((json) => {
    const pokemons=  json.results;
     console.log(pokemons);
       createpokemoncard(pokemons);
    });
  }

 
 
  

   
 
 























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