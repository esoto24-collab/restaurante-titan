const main = document.querySelector('#main');

const juegos = [
  {
    name: 'Gato Alien',
    direccion: '/src/pages/alien.html',
  },
  {
    name: 'Cuadros Locos',
    direccion: '/src/pages/cuadrosLocos.html',
  },
  {
    name: 'Pelota',
    direccion: '/src/pages/pelotaRoja.html',
  },
  {
    name: 'Pedro',
    direccion: '/src/pages/pedro.html',
  },
  {
    name: 'Snake',
    direccion: '/src/pages/snake.html'
  }
];

export const crearTarjetasJuegos = () => {
  main.innerHTML = '';
  main.className = '';
  main.classList.add('main__juegos');

  const tituloJuegos = document.createElement('h2');
  tituloJuegos.textContent = 'Diversion Titanica';

  const contenedorTarjetas = document.createElement('div');
  for (let i = 0; i < juegos.length; i++) {
    const contenedor = document.createElement('div');
    contenedor.classList.add('tarjeta__juego');
    console.log(juegos[i].name);
    contenedor.textContent = juegos[i].name;
    contenedor.addEventListener('click', () => {
      window.location.href = juegos[i].direccion;
    });
    contenedorTarjetas.appendChild(contenedor);
  }

  main.appendChild(tituloJuegos);
  main.appendChild(contenedorTarjetas);
};
