const main = document.querySelector('#main');

const menuItems = [
  {
    id: 1,
    nombre: 'Hamburguesa Titán Doble',
    categoria: 'Hamburguesas',
    precio: '$260',
    descripcion: '1.2 kg de carne de res prémium, cuádruple queso cheddar fundido y tocino crujiente.',
    img: './src/assets/img/hamburguesota.jpg',
    badge: 'MÁS POPULAR 🔥',
  },
  {
    id: 2,
    nombre: 'Hamburguesa Godzilla',
    categoria: 'Hamburguesas',
    precio: '$340',
    descripcion: 'Cuatro pisos de carne ahumada, aros de cebolla tempura, guacamole y salsa habanero dulce.',
    img: './src/assets/img/hamburguesa.jpg',
    badge: 'RETO TITÁN ⚡',
  },
  {
    id: 3,
    nombre: 'Pizza Monstruo 4 Quesos',
    categoria: 'Pizzas Colosales',
    precio: '$380',
    descripcion: '50 cm de masa artesanal horneada en leña, cubierta de mozzarella, gouda, parmesano y azul.',
    img: './src/assets/img/pizza.jpg',
    badge: 'COLOSAL 🍕',
  },
  {
    id: 4,
    nombre: 'Pizza Volcán de Pepperoni',
    categoria: 'Pizzas Colosales',
    precio: '$360',
    descripcion: 'Doble piso con orilla rellena de queso gouda y más de 100 rebanadas de pepperoni crujiente.',
    img: './src/assets/img/pizza.jpg',
    badge: 'FAVORITA 🧀',
  },
  {
    id: 5,
    nombre: 'Alitas Furia Titán (1.5 KG)',
    categoria: 'Alitas & Boneless',
    precio: '$290',
    descripcion: 'Montaña de alitas doradas al punto exacto, bañadas en salsa buffalo extrema o mango habanero.',
    img: './src/assets/img/alitas.jpg',
    badge: 'PICANTE MORTAL 🌶️',
  },
  {
    id: 6,
    nombre: 'Mega Boneless Supreme',
    categoria: 'Alitas & Boneless',
    precio: '$280',
    descripcion: 'Pechuga selecta en cubos gigantes ultra crujientes con salsa BBQ ahumada y dip de blue cheese.',
    img: './src/assets/img/alitas.jpg',
    badge: 'CRUJIENTE ✨',
  },
  {
    id: 7,
    nombre: 'Mega Rollo Dragón XXL',
    categoria: 'Sushi Gigante',
    precio: '$310',
    descripcion: '16 piezas colosales rellenas de camarón tempura, queso crema, aguacate y salsa de anguila.',
    img: './src/assets/img/suchi.jpg',
    badge: 'JAPÓN TITÁN 🍣',
  },
  {
    id: 8,
    nombre: 'Sushi Volcán Flameado',
    categoria: 'Sushi Gigante',
    precio: '$330',
    descripcion: 'Rollo gigante horneado y bañado con ensalada de cangrejo gratinada, masago y sriracha.',
    img: './src/assets/img/suchi.jpg',
    badge: 'GRATINADO 🔥',
  },
  {
    id: 9,
    nombre: 'Papas Volcán con Queso',
    categoria: 'Papas Volcánicas',
    precio: '$220',
    descripcion: '1 kilo de papas corte rústico ahogadas en queso cheddar derretido, tocino en trozos y cebollín.',
    img: './src/assets/img/papasGigantes.jpg',
    badge: 'PARA COMPARTIR 🍟',
  },
  {
    id: 10,
    nombre: 'Papas Gigantes Bravas',
    categoria: 'Papas Volcánicas',
    precio: '$190',
    descripcion: 'Papas francesas extra largas espolvoreadas con paprika picante, sal marina y dip de chipotle.',
    img: './src/assets/img/papasGigantes.jpg',
    badge: 'EXTRA LARGAS 🥓',
  },
  {
    id: 11,
    nombre: 'Combo Glotón Supremo',
    categoria: 'Combos Titán',
    precio: '$590',
    descripcion: '1 Hamburguesa Titán + 1/2 Pizza + Papas Volcán + 10 Alitas + 2 Bebidas colosales.',
    img: './src/assets/img/tortugatitan.jpg',
    badge: 'MEJOR VALOR 👑',
  },
  {
    id: 12,
    nombre: 'Hamburguesa La Tortuga',
    categoria: 'Hamburguesas',
    precio: '$275',
    descripcion: 'Pan brioche horneado en casa, costra de queso asadero, champiñones salteados y carne jugosa.',
    img: './src/assets/img/tortugatitan.jpg',
    badge: 'CLÁSICA TITÁN 🐢',
  },
];

const categoriasMenu = [
  'Todas',
  'Hamburguesas',
  'Pizzas Colosales',
  'Alitas & Boneless',
  'Sushi Gigante',
  'Papas Volcánicas',
  'Combos Titán',
];

const mostrarToast = (mensaje) => {
  let toast = document.querySelector('#toast-pedido');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'toast-pedido';
    toast.className = 'toast-notificacion';
    document.body.appendChild(toast);
  }
  toast.textContent = mensaje;
  toast.classList.add('visible');
  setTimeout(() => {
    toast.classList.remove('visible');
  }, 3200);
};

const crearMenu = (categoriaInicial = 'Todas') => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth',
  });

  main.innerHTML = '';
  main.className = 'main_menu';

  // Normalizar categoría inicial si viene de los tags del home
  let categoriaActiva = 'Todas';
  if (typeof categoriaInicial === 'string') {
    const match = categoriasMenu.find(
      (c) => c.toLowerCase().includes(categoriaInicial.toLowerCase()) || categoriaInicial.toLowerCase().includes(c.toLowerCase())
    );
    if (match) categoriaActiva = match;
  }

  // Header del menú
  const menuHeader = document.createElement('div');
  menuHeader.className = 'menu-header-box';
  menuHeader.innerHTML = `
    <div class="menu-header-text">
      <span class="menu-badge-pill">★ CARTA OFICIAL ★</span>
      <h2 class="menu-titulo">MENÚ BRUTAL</h2>
      <p class="menu-subtitulo">Comida descomunal para valientes. Todas nuestras porciones están garantizadas para saciar a un titán.</p>
    </div>
  `;

  // Barra de filtrado
  const filterBar = document.createElement('div');
  filterBar.className = 'menu-filter-bar';

  // Pills de categoría
  const pillsContainer = document.createElement('div');
  pillsContainer.className = 'menu-filter-pills';

  categoriasMenu.forEach((cat) => {
    const pill = document.createElement('button');
    pill.type = 'button';
    pill.className = `filter-pill ${cat === categoriaActiva ? 'active' : ''}`;
    pill.textContent = cat;
    pill.addEventListener('click', () => {
      categoriaActiva = cat;
      actualizarPills();
      selectDropdown.value = cat;
      renderizarItems(cat);
    });
    pillsContainer.appendChild(pill);
  });

  // Selector desplegable para móviles
  const selectWrapper = document.createElement('div');
  selectWrapper.className = 'menu-select-wrapper';
  const selectLabel = document.createElement('label');
  selectLabel.htmlFor = 'select_categoria';
  selectLabel.textContent = 'Filtrar por categoría:';

  const selectDropdown = document.createElement('select');
  selectDropdown.id = 'select_categoria';
  selectDropdown.className = 'menu-select';

  categoriasMenu.forEach((cat) => {
    const opt = document.createElement('option');
    opt.value = cat;
    opt.textContent = cat;
    if (cat === categoriaActiva) opt.selected = true;
    selectDropdown.appendChild(opt);
  });

  selectDropdown.addEventListener('change', (e) => {
    categoriaActiva = e.target.value;
    actualizarPills();
    renderizarItems(categoriaActiva);
  });

  selectWrapper.appendChild(selectLabel);
  selectWrapper.appendChild(selectDropdown);

  filterBar.appendChild(pillsContainer);
  filterBar.appendChild(selectWrapper);

  menuHeader.appendChild(filterBar);
  main.appendChild(menuHeader);

  // Contenedor del grid de tarjetas
  const tarjetasContainer = document.createElement('div');
  tarjetasContainer.className = 'tarjetas-menu-grid';
  main.appendChild(tarjetasContainer);

  const actualizarPills = () => {
    pillsContainer.querySelectorAll('.filter-pill').forEach((p) => {
      p.classList.toggle('active', p.textContent === categoriaActiva);
    });
  };

  const renderizarItems = (catSeleccionada) => {
    tarjetasContainer.innerHTML = '';
    const filtrados =
      catSeleccionada === 'Todas'
        ? menuItems
        : menuItems.filter((item) => item.categoria === catSeleccionada);

    if (filtrados.length === 0) {
      tarjetasContainer.innerHTML = `
        <div class="menu-empty-state">
          <h4>No hay platillos en esta categoría</h4>
          <p>Pronto agregaremos nuevas opciones titánicas.</p>
        </div>
      `;
      return;
    }

    filtrados.forEach((item) => {
      const card = document.createElement('article');
      card.className = 'tarjeta-menu-item';
      card.innerHTML = `
        <div class="menu-item-img-wrapper">
          <img src="${item.img}" alt="${item.nombre}" loading="lazy" />
          <span class="menu-item-badge">${item.badge}</span>
          <span class="menu-item-price-pill">${item.precio}</span>
        </div>
        <div class="menu-item-info">
          <div class="menu-item-cat">${item.categoria}</div>
          <h4 class="menu-item-name">${item.nombre}</h4>
          <p class="menu-item-desc">${item.descripcion}</p>
          <div class="menu-item-footer">
            <span class="menu-item-price-large">${item.precio}</span>
            <button class="btn-pedir" type="button">¡PEDIR AHORA! 🛒</button>
          </div>
        </div>
      `;

      const btnPedir = card.querySelector('.btn-pedir');
      btnPedir.addEventListener('click', (e) => {
        e.stopPropagation();
        mostrarToast(`¡${item.nombre} (${item.precio}) agregado a tu orden titánica! 🎉`);
      });

      tarjetasContainer.appendChild(card);
    });
  };

  renderizarItems(categoriaActiva);
};

export default crearMenu;
