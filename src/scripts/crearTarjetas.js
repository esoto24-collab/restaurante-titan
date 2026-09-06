import crearMenu from './crearMenu.js';

const categorias = [
  { nombre: 'Hamburguesa', class: 'hamburguesa' },
  { nombre: 'Pizza',  class: 'pizza' },
  { nombre: 'Alitas',  class: 'alitas'},
  { nombre: 'Suchi',  class: 'suchi' },
  { nombre: 'Papas',  class: 'papas' },
];

const crearTarjetas = () => {
  const tarjetas = document.querySelector('#tarjetas');
  tarjetas.innerHTML = '';
  tarjetas.classList.add('inicio');
  for (let i = 0; i < categorias.length; i++) {
    const div = document.createElement('div');
    const informativo = document.createElement('div');
    const nombreProducto = document.createElement('p');
    div.addEventListener('click', crearMenu);
    nombreProducto.textContent = categorias[i].nombre;
    div.classList.add(categorias[i].class)
    informativo.appendChild(nombreProducto);
    div.appendChild(informativo);
    tarjetas.appendChild(div);
  }
};

export default crearTarjetas;
