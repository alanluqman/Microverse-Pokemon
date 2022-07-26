import './style.css';
import logo from './assets/images/logo.png';

const myLogo = document.getElementById('myLogo');

// add icon to the page
const link = document.createElement('link');
link.rel = 'icon';
link.href = logo;
document.head.appendChild(link);

const img = document.createElement('img');
img.src = logo;
img.alt = 'logo';
myLogo.appendChild(img);
