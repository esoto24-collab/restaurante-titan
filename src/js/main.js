import '../components/socialCard/socialCard.js';
import '../components/functionalCard/functionalCard.js';
import { generarRedesSociales } from './redesSociales.js';

const btncambiarTema = document.querySelector('#modo')
const root = document.documentElement

const links = document.querySelector("#links")
links.appendChild(generarRedesSociales())

/*
btncambiarTema.addEventListener('click', () => {
  root.classList.toggle('dark');
  if (root.classList.contains('dark')) {
    btncambiarTema.imagen = '/src/assets/svg/sun.svg';
    console.log('cambio');
  } else {
    btncambiarTema.imagen = '/src/assets/svg/moon.svg';
    console.log('cambio 2');
  }
});
*/
