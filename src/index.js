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

getPokemonList();
getLike(likeAPI);

const home = document.getElementById('home');
const about = document.getElementById('about');

home.addEventListener('click', () => {
  if (!home.classList.contains('page-active')) {
    home.classList.add('page-active');
    about.classList.remove('page-active');
    document.getElementById('aboutContainer').style.display = 'none';
    document.getElementById('poke_container').classList.remove('hide-tab');
  }
});

about.addEventListener('click', () => {
  if (!about.classList.contains('page-active')) {
    home.classList.remove('page-active');
    about.classList.add('page-active');
    document.getElementById('aboutContainer').style.display = 'flex';
    document.getElementById('poke_container').classList.add('hide-tab');
  }
});