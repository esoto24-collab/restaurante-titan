const main = document.querySelector('#main');
main.innerHTML = '';

const opciones = [
  { nombre: 'Hamburguesa', url: '' },
  { nombre: 'Refresco', url: '' },
  { nombre: 'Pizza', url: '' },
  { nombre: 'Alitas', url: '' },
  { nombre: 'Suchi', url: '' },
  { nombre: 'Papas', url: '' },
  { nombre: 'Pollo', url: '' },
  { nombre: 'Combos', url: '' },
];

const crearMenu = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });
  main.innerHTML = '';
  main.className = '';
  main.classList.add('main_menu');

  const parrafo = document.createElement('h5');
  parrafo.textContent = 'Menu';

  const label = document.createElement('label');
  const selected = document.createElement('select');

  label.textContent = 'FILTRAR POR';

  for (let i = 0; i < opciones.length; i++) {
    const option = document.createElement('option');
    option.textContent = opciones[i].nombre;
    option.value = opciones[i];
    selected.appendChild(option);
  }

  const div = document.createElement('div');
  div.appendChild(parrafo);
  label.appendChild(selected);
  div.appendChild(label);
  main.appendChild(div);

  const tarjetas = document.createElement('div');
  for (let i = 0; i < 32; i++) {
    const div = document.createElement('div');
    const informativo = document.createElement('div');
    const nombreProducto = document.createElement('p');
    const precioProducto = document.createElement('strong');
    nombreProducto.textContent = 'Hamburgruesa';
    precioProducto.textContent = '$200';
    informativo.appendChild(nombreProducto);
    informativo.appendChild(precioProducto);
    div.appendChild(informativo);
    tarjetas.appendChild(div);
  }
  tarjetas.classList.add('tarjetas');
  main.appendChild(tarjetas);
};

export default crearMenu;
