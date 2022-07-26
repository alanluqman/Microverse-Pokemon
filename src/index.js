import './style.css';
import logo from './assets/images/logo.png';
import fetchpokemons from './displaypokemonitems.js';

const myLogo = document.getElementById('myLogo');

// Add Logo Image //
let imageHtml = '';
imageHtml += `
<img src="${logo}" alt="logo">`;
myLogo.innerHTML = imageHtml;

fetchpokemons();