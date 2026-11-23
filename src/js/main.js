import '../components/socialCard/socialCard.js';
import '../components/functionalCard/functionalCard.js';
import '../components/formCampo/formCampo.js';
import '../components/categoriaCard/categoriaCard.js';
import '../components/titanTitulo/titanTitulo.js';
import '../components/opcionMenu/opcionMenu.js';

import { generarRedesSociales } from './redesSociales.js';
import { generarCategorias } from './categorias.js';

const btnTema = document.querySelector('#tema');
const btnMenuHamburguesa = document.querySelector('#menu-hamburguesa');
const divBarraLateral = document.querySelector('#barra-lateral');
const filtroOscuro = document.querySelector('#filtro-oscuro');
const salirBarra = document.querySelector('#salir-barra');
const opcionTema = document.querySelector('#opcion-tema');
const root = document.documentElement;

document.querySelector('footer').prepend(generarRedesSociales());

function cambiarEstadoMenu(ocultar) {
  divBarraLateral.classList.toggle('ocultar', ocultar);
  filtroOscuro.classList.toggle('ocultar', ocultar);
  document.body.classList.toggle('sin-scroll', !ocultar);
}

function cambiarTema() {
  root.classList.toggle('dark');
  if (root.classList.contains('dark')) {
    btnTema.imagen = '/src/assets/svg/sun.svg';
    opcionTema.imagen = '/src/assets/svg/sun.svg';
    opcionTema.texto = 'Modo Dia';
    console.log('cambio');
  } else {
    btnTema.imagen = '/src/assets/svg/moon.svg';
    opcionTema.imagen = '/src/assets/svg/moon.svg';
    opcionTema.texto = 'Modo Oscuro ';
    console.log('cambio 2');
  }
}

function renderizarEnMain(html, { reemplazar = true } = {}) {
  const main = document.querySelector('main');
  if (!main) return;

  if (reemplazar) {
    main.innerHTML = html;
  } else {
    main.insertAdjacentHTML('beforeend', html);
  }
}

btnMenuHamburguesa.addEventListener('click', () => {
  const estaOculta = divBarraLateral.classList.contains('ocultar');
  cambiarEstadoMenu(!estaOculta);
});

filtroOscuro.addEventListener('click', () => {
  cambiarEstadoMenu(true);
});

salirBarra.addEventListener('click', () => {
  cambiarEstadoMenu(true);
});

btnTema.addEventListener('click', cambiarTema);
opcionTema.addEventListener('click', () => {
  cambiarEstadoMenu(true);
  cambiarTema();
});

const vistas = {
  inicio: () => `
    <section class="hero">
      SIN COMIDA NO HAY GLORIA
      <button>Ordenar</button>
    </section>
    <section class="tiposComidas" id="categorias">
      <div class="tiposComidas__informacion">
      <h1>Apartados Menu</h1>
      <em>Mira nuestros distintos tipos de comida</em>
    </div>
  </section>
  `,
  menu: () => `
    <section class="tiposComidas">
      <h1>Apartados Menu</h1>
    </section>
  `,
};

function navegarA(nombreVista) {
  const render = vistas[nombreVista];
  if (!render) return;

  renderizarEnMain(render());
}

//navegarA('inicio');
document.querySelector('#categorias').appendChild(generarCategorias());
