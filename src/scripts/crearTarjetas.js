import crearMenu from './crearMenu.js';

const categorias = [
  {
    nombre: 'Hamburguesas',
    tag: 'hamburguesa',
    itemsCount: '8 Especialidades',
    url: './src/assets/img/hamburguesota.jpg',
    alt: 'Hamburguesa Titánica gigante con capas de carne y queso',
  },
  {
    nombre: 'Pizzas Colosales',
    tag: 'pizza',
    itemsCount: '6 Tamaños Familiares',
    url: './src/assets/img/pizza.jpg',
    alt: 'Pizza gigante rebosante de queso y pepperoni',
  },
  {
    nombre: 'Alitas & Boneless',
    tag: 'alitas',
    itemsCount: '12 Salsas Mortales',
    url: './src/assets/img/alitas.jpg',
    alt: 'Montaña de alitas bañadas en salsa picante',
  },
  {
    nombre: 'Sushi Gigante',
    tag: 'suchi',
    itemsCount: 'Mega Rollos Especiales',
    url: './src/assets/img/suchi.jpg',
    alt: 'Rollo de sushi gigante con aderezos especiales',
  },
  {
    nombre: 'Papas Volcánicas',
    tag: 'papas',
    itemsCount: 'Bañadas en Tocino y Queso',
    url: './src/assets/img/papasGigantes.jpg',
    alt: 'Papas fritas gigantes con queso fundido y tocino',
  },
];

const crearTarjetas = () => {
  const tarjetas = document.querySelector('#tarjetas');
  if (!tarjetas) return;
  tarjetas.innerHTML = '';

  categorias.forEach((cat) => {
    const card = document.createElement('article');
    card.className = `tarjeta-categoria tarjeta-${cat.tag}`;
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Explorar categoría ${cat.nombre}`);

    card.innerHTML = `
      <div class="tarjeta-img-container">
        <img src="${cat.url}" alt="${cat.alt}" loading="lazy" />
        <span class="tarjeta-pill-badge">${cat.itemsCount}</span>
      </div>
      <div class="tarjeta-info">
        <div class="tarjeta-info-text">
          <h4 class="tarjeta-titulo">${cat.nombre}</h4>
          <span class="tarjeta-accion">Ver platillos →</span>
        </div>
      </div>
    `;

    card.addEventListener('click', () => {
      crearMenu(cat.nombre);
    });

    card.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        crearMenu(cat.nombre);
      }
    });

    tarjetas.appendChild(card);
  });
};

export default crearTarjetas;
