import crearMenu from './crearMenu.js';

const categorias = [
  {
    nombre: 'Hamburguesa',
    class: 'hamburguesa',
    url: './src/assets/img/hamburguesota.jpg',
    alt: 'Imagen de hamburguesa gigante',
  },
  {
    nombre: 'Pizza',
    class: 'pizza',
    url: './src/assets/img/pizza.jpg',
    alt: 'Imagen de pizza gigante',
  },
  {
    nombre: 'Alitas',
    class: 'alitas',
    url: './src/assets/img/alitas.jpg',
    alt: 'Imagen de una gran cantidad de alitas',
  },
  {
    nombre: 'Sushi',
    class: 'sushi',
    url: './src/assets/img/suchi.jpg',
    alt: 'Imagen de un gran rollo de sushi',
  },
  {
    nombre: 'Papas',
    class: 'papas',
    url: './src/assets/img/papasGigantes.jpg',
    alt: 'Imagen de unas papa fritas muy largas',
  },
  {
    nombre: 'Boneless',
    class: 'boneless',
    url: './src/assets/img/bonele.jpg',
    alt: 'Imagen de un boneless muy grande',
  },
];

const contenedorBusqueda = document.createElement('div');
contenedorBusqueda.classList.add('contenedor-busqueda');

const labelBusqueda = document.createElement('label');
labelBusqueda.textContent = 'Búsqueda';
labelBusqueda.setAttribute('for', 'input-buscador');
labelBusqueda.classList.add('label-busqueda');

const inputBusqueda = document.createElement('input');
inputBusqueda.id = 'input-buscador';
inputBusqueda.classList.add('buscador-menu');
inputBusqueda.placeholder = 'Buscar categoría...';

contenedorBusqueda.appendChild(labelBusqueda);
contenedorBusqueda.appendChild(inputBusqueda);

const crearTarjetas = (datos = categorias) => {
  const tarjetas = document.querySelector('#tarjetas');
  
  if (!tarjetas.contains(contenedorBusqueda)) {
    tarjetas.classList.add('inicio');
    tarjetas.appendChild(contenedorBusqueda);
  }

  Array.from(tarjetas.children).forEach(nodo => {
    if (nodo !== contenedorBusqueda) {
      nodo.remove();
    }
  });

  datos.forEach(categoria => {
    const div = document.createElement('div');
    const imagenTarjeta = document.createElement('img');
    const informativo = document.createElement('div');
    const nombreProducto = document.createElement('p');
    
    div.addEventListener('click', crearMenu);
    
    div.style.cursor = 'pointer'; 

    nombreProducto.textContent = categoria.nombre;
    imagenTarjeta.src = categoria.url;
    imagenTarjeta.alt = categoria.alt;
    imagenTarjeta.loading = 'lazy';
    div.classList.add(categoria.class);
    
    informativo.appendChild(nombreProducto);
    div.appendChild(imagenTarjeta);
    div.appendChild(informativo);
    tarjetas.appendChild(div);
  });
};

inputBusqueda.addEventListener('input', (e) => {
    const termino = e.target.value.toLowerCase();
    const resultados = categorias.filter(item => 
        item.nombre.toLowerCase().includes(termino)
    );
    crearTarjetas(resultados);
});

export default crearTarjetas;