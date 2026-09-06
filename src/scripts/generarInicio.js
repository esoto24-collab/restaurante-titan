import crearHero from './crearHero.js';
import crearTarjetas from './crearTarjetas.js';
const main = document.querySelector('#main');


const generarInicio = () => {
  main.innerHTML = '';
  main.className = '';
  main.classList.add('main-inicio');
  const hero = document.createElement('section');
  const tarjetas = document.createElement('section');
  hero.classList = 'hero';
  hero.id = 'hero'
  tarjetas.classList = 'tarjetas';
  tarjetas.id = 'tarjetas';
  main.appendChild(hero);
  main.appendChild(tarjetas);
  crearTarjetas()
  crearHero()
};

export default generarInicio;
