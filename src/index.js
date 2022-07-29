import './style.css';
import logo from './assets/images/logo.png';
import { getPokemonList } from './displaypokemonitems.js';
import { getLike } from './popup.js';

const myLogo = document.getElementById('myLogo');
const likeAPI = 'https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/oheYik9wd8sLSwZdAJ1P/likes';

// Add Logo Image //
let imageHtml = '';
imageHtml += `
<img src="${logo}" alt="logo">`;
myLogo.innerHTML = imageHtml;

// fetchpokemons();

getPokemonList();
getLike(likeAPI);
