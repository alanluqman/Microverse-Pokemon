import './style.css';
import logo from './assets/images/logo.png';
import'./displaypokemonitems.js';
import './popup.js';
import { getPokemonList } from './displaypokemonitems.js';

const myLogo = document.getElementById('myLogo');

// Add Logo Image //
let imageHtml = '';
imageHtml += `
<img src="${logo}" alt="logo">`;
myLogo.innerHTML = imageHtml;

// fetchpokemons();

getPokemonList();