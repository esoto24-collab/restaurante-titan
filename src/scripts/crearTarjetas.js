import crearMenu from './crearMenu.js';

const categorias = [
  { nombre: 'Hamburguesa', class: 'hamburguesa', url: './src/assets/img/hamburguesota.jpg', alt: 'Imagen de hamburguesa gigante'},
  { nombre: 'Pizza',  class: 'pizza', url: './src/assets/img/pizza.jpg', alt: 'Imagen de pizza gigante'},
  { nombre: 'Alitas',  class: 'alitas', url: './src/assets/img/alitas.jpg', alt: 'Imagen de una gran cantidad de alitas'},
  { nombre: 'Suchi',  class: 'sushi', url: './src/assets/img/suchi.jpg', alt: 'Imagen de un gran rollo de sushi'},
  { nombre: 'Papas',  class: 'papas', url: './src/assets/img/papasGigantes.jpg', alt: 'Imagen de unas papa fritas muy largas'},
];

const crearTarjetas = () => {
  const tarjetas = document.querySelector('#tarjetas');
  tarjetas.innerHTML = '';
  tarjetas.classList.add('inicio');
  for (let i = 0; i < categorias.length; i++) {
    const div = document.createElement('div');
    const imagenTarjeta = document.createElement('img');
    const informativo = document.createElement('div');
    const nombreProducto = document.createElement('p');
    div.addEventListener('click', crearMenu);
    nombreProducto.textContent = categorias[i].nombre;
    imagenTarjeta.src = categorias[i].url;
    imagenTarjeta.alt = categorias[i].alt;
    imagenTarjeta.loading = 'lazy';
    div.classList.add(categorias[i].class)
    informativo.appendChild(nombreProducto);
    div.appendChild(imagenTarjeta);
    div.appendChild(informativo);
    tarjetas.appendChild(div);
  }
};

export default crearTarjetas;
