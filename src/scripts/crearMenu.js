import Swal from 'sweetalert2';
import { obtenerCarrito, guardarCarrito } from './storage.js';

const imagenesPorCategoria = {
  Hamburguesas: './src/assets/img/hamburguesota.jpg',
  Pizzas: './src/assets/img/pizza.jpg',
  Tacos: './src/assets/img/hotdoghero.jpg',
  Bebidas: './src/assets/img/bonele.jpg',
  Alitas: './src/assets/img/alitas.jpg',
  Sushi: './src/assets/img/suchi.jpg',
  Papas: './src/assets/img/papasGigantes.jpg',
};

export default async function crearMenu() {
  const main = document.querySelector('#main');
  main.innerHTML = '';
  main.className = '';
  main.classList.add('main__menu');

  const barraSuperior = document.createElement('div');
  barraSuperior.innerHTML = `
    <h2 style="font-family: var(--titulo); font-size: 2rem; color: var(--negro);">MENU BRUTAL</h2>
    <label for="filtro-categoria">
      Categoria
      <select id="filtro-categoria">
        <option value="Todas">Todas</option>
      </select>
    </label>
  `;

  const estadoDiv = document.createElement('div');
  estadoDiv.id = 'menu-estado';
  estadoDiv.style.cssText =
    'margin: 1rem 4vh; padding: 1rem 1.5rem; border: var(--borde); box-shadow: var(--shadow); background: var(--amarrillo); color: #000; font-family: var(--subtitulo); font-weight: bold;';
  estadoDiv.textContent = 'Cargando platillos...';

  const gridDiv = document.createElement('section');
  gridDiv.classList.add('tarjetas');
  gridDiv.id = 'menu-grid';

  const carritoBox = document.createElement('section');
  carritoBox.id = 'carrito-box';
  carritoBox.style.cssText =
    'margin: 2rem 4vh; padding: 1.5rem; border: var(--borde); border-radius: var(--radio-medio); box-shadow: var(--shadow); background-color: var(--blanco); color: var(--negro); font-family: var(--subtitulo);';
  carritoBox.innerHTML = `
    <h3 style="font-family: var(--titulo); margin-top: 0;">Tu Pedido Titanico</h3>
    <ul id="lista-carrito" style="margin: 1rem 0; list-style: none; padding: 0;"></ul>
    <p id="total-carrito" style="font-weight: 900; font-size: 1.2rem;">Total: $0 MXN</p>
    <div style="margin-top: 1rem; display: flex; gap: var(--gap-chico); flex-wrap: wrap;">
      <button id="btn-confirmar-pedido" style="padding: 0.6rem 1.2rem; border: var(--borde); border-radius: var(--radio-medio); box-shadow: var(--shadow-small); background: var(--naranajaFuerte); color: #fff; font-weight: 800; cursor: pointer;">
        Confirmar Pedido
      </button>
      <button id="btn-vaciar-carrito" style="padding: 0.6rem 1.2rem; border: var(--borde); border-radius: var(--radio-medio); box-shadow: var(--shadow-small); background: var(--rojo); color: #fff; font-weight: 800; cursor: pointer;">
        Vaciar Carrito
      </button>
    </div>
  `; // Aqui pedi ayuda a la IA para el estilo ya que me daba error tras error, aunque de todas formas me lo dejo bien feo y tuve que modificarlo más

  main.append(barraSuperior, estadoDiv, gridDiv, carritoBox);
  renderizarCarrito(main);

  try {
    const respuesta = await fetch('./src/data/menu.json');
    if (!respuesta.ok) {
      throw new Error(`Error ${respuesta.status}: No se pudo obtener el menu.`);
    }

    const platillos = await respuesta.json();
    estadoDiv.style.display = 'none';

    const selectCategoria = barraSuperior.querySelector('#filtro-categoria');
    const categoriasUnicas = [...new Set(platillos.map((p) => p.categoria))];
    categoriasUnicas.forEach((cat) => {
      const option = document.createElement('option');
      option.value = cat;
      option.textContent = cat;
      selectCategoria.appendChild(option);
    });

    const pintarPlatillos = (lista) => {
      gridDiv.innerHTML = '';
      lista.forEach((platillo) => {
        const card = document.createElement('div');
        card.classList.add('comida');

        const rutaImg =
          platillo.imagen ||
          imagenesPorCategoria[platillo.categoria] ||
          './src/assets/img/hamburguesota.jpg';

        card.innerHTML = `
          <img src="${rutaImg}" alt="${platillo.nombre}" loading="lazy" />
          <div>
            <p>${platillo.nombre}</p>
            <p>$${platillo.precio} MXN</p>
            <p style="width: 100%; font-size: 0.9rem; font-weight: normal; margin: 0.4rem 0;">
              ${platillo.descripcion} (${platillo.calorias})
            </p>
            <div>
              <button class="btn-agregar">+ Agregar al pedido</button>
            </div>
          </div>
        `;  

        card.querySelector('.btn-agregar').addEventListener('click', (e) => {
          e.stopPropagation();
          agregarAlCarrito(platillo, main);
        });

        gridDiv.appendChild(card);
      });
    };

    pintarPlatillos(platillos);

    selectCategoria.addEventListener('change', (e) => {
      const seleccion = e.target.value;
      const filtrados =
        seleccion === 'Todas'
          ? platillos
          : platillos.filter((p) => p.categoria === seleccion);
      pintarPlatillos(filtrados);
    });
  } catch (error) {
    estadoDiv.style.display = 'block';
    estadoDiv.style.background = 'var(--rojo)';
    estadoDiv.style.color = '#ffffff';
    estadoDiv.textContent = `Ocurrió un problema al cargar el menu: ${error.message}. Intenta recargar la página.`;

    Swal.fire({
      icon: 'error',
      title: 'Error de conexion',
      text: 'No pudimos cargar los platillos del servidor.',
      confirmButtonColor: '#ff5400',
    });
  }
}

function agregarAlCarrito(platillo, contenedor) {
  const carrito = obtenerCarrito();
  const existente = carrito.find((item) => item.id === platillo.id);

  if (existente) {
    existente.cantidad += 1;
  } else {
    carrito.push({ ...platillo, cantidad: 1 });
  }

  guardarCarrito(carrito);
  renderizarCarrito(contenedor);

  Swal.fire({
    toast: true,
    position: 'top-end',
    icon: 'success',
    title: `${platillo.nombre} agregado`,
    showConfirmButton: false,
    timer: 1500,
  });
}

function renderizarCarrito(contenedor) {
  const lista = contenedor.querySelector('#lista-carrito');
  const totalEl = contenedor.querySelector('#total-carrito');
  const carrito = obtenerCarrito();

  if (carrito.length === 0) {
    lista.innerHTML = '<li>Tu carrito esta vacio. Elige un platillo.</li>';
    totalEl.textContent = 'Total: $0 MXN';
    return;
  }

  let total = 0;
  lista.innerHTML = carrito
    .map((item) => {
      const subtotal = item.precio * item.cantidad;
      total += subtotal;
      return `<li style="padding: 0.4rem 0; border-bottom: 1px dashed var(--negro);">
        <strong>${item.cantidad}x</strong> ${item.nombre} — $${subtotal} MXN
      </li>`;
    })
    .join('');

  totalEl.textContent = `Total: $${total} MXN`;

  contenedor.querySelector('#btn-vaciar-carrito').onclick = async () => {
    const resultado = await Swal.fire({
      title: '¿Vaciar el pedido?',
      text: 'Se eliminaran todos los platillos guardados.',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#e63946',
      cancelButtonColor: '#333',
      confirmButtonText: 'Si, vaciar',
      cancelButtonText: 'Cancelar',
    });

    if (resultado.isConfirmed) {
      guardarCarrito([]);
      renderizarCarrito(contenedor);
    }
  };

  contenedor.querySelector('#btn-confirmar-pedido').onclick = () => {
    if (obtenerCarrito().length === 0) return;

    Swal.fire({
      icon: 'success',
      title: 'Pedido enviado',
      text: `Total de $${total} MXN.`,
      confirmButtonColor: '#ff5400',
    });

    guardarCarrito([]);
    renderizarCarrito(contenedor);
  };
}