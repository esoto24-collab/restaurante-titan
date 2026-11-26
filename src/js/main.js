import '../components/socialCard/socialCard.js';
import '../components/functionalCard/functionalCard.js';
import '../components/formCampo/formCampo.js';
import '../components/categoriaCard/categoriaCard.js';
import '../components/titanTitulo/titanTitulo.js';
import '../components/opcionMenu/opcionMenu.js';
import '../components/opcionCategoria/opcionCategoria.js';
import '../components/comidaCard/comidaCard.js';
import '../components/ticketCard/ticketCard.js';
import '../components/dialogTicket/dialogTicket.js';

import { generarRedesSociales } from './redesSociales.js';
import { generarCategorias } from './categorias.js';
import { generarComidas } from './comidas.js';
import { generarCamposCrear } from './camposCrear.js';
import { generarCamposIniciar } from './camposIniciar.js';
import { generarTickets } from './tickets.js';

const btnTema = document.querySelector('#tema');
const btnMenuHamburguesa = document.querySelector('#menu-hamburguesa');
const divBarraLateral = document.querySelector('#barra-lateral');
const filtroOscuro = document.querySelector('#filtro-oscuro');
const salirBarra = document.querySelector('#salir-barra');
const opcionTema = document.querySelector('#opcion-tema');
const opcionInicio = document.querySelector('#opcion-inicio');
const opcionMenu = document.querySelector('#opcion-menu');
const opcionCrearCuenta = document.querySelector('#opcion-crear-cuenta');
const opcionIniciarSesion = document.querySelector('#opcion-iniciar-sesion');

const opcionPerfil = document.querySelector('#opcion-perfil');
const root = document.documentElement;

//document.querySelector('footer').prepend(generarRedesSociales());

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
  } else {
    btnTema.imagen = '/src/assets/svg/moon.svg';
    opcionTema.imagen = '/src/assets/svg/moon.svg';
    opcionTema.texto = 'Modo Oscuro ';
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

btnMenuHamburguesa?.addEventListener('click', () => {
  const estaOculta = divBarraLateral.classList.contains('ocultar');
  cambiarEstadoMenu(!estaOculta);
});

filtroOscuro?.addEventListener('click', () => {
  cambiarEstadoMenu(true);
});

salirBarra?.addEventListener('click', () => {
  cambiarEstadoMenu(true);
});

btnTema?.addEventListener('click', cambiarTema);
opcionTema?.addEventListener('click', () => {
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
    <div class="informacion">
      <h1>Menu Titanico</h1>
      <em>Mira nuestras deliciosas comidas</em>
    </div>
    <h3>Categorias</h3>
    <div class="opciones-categorias">
      <opcion-categoria texto="Hamburguesa"></opcion-categoria>
      <opcion-categoria texto="Pizza"></opcion-categoria>
      <opcion-categoria texto="Papas"></opcion-categoria>
    </div>
  `,
  crearCuenta: () => `
      <form>
        <h1>Crear Cuenta</h1>
        <button class="btn-enviar">Registrarme</button>
      </form>
  `,
  iniciarSesion: () => `
      <form>
        <h1>Iniciar Sesion</h1>
        <button class="btn-enviar">Registrarme</button>
      </form>
  `,
  perfil: () => `
    <dialog-ticket></dialog-ticket>
    <div class="perfil">
      <div class="perfil__nombre">
          <functional-card
            imagen="/src/assets/svg/user.svg"
          ></functional-card>
          <h3>Jesus Ivan</h3>
      </div>
      <hr />
      <div class="perfil__informacion">
          <div class="perfil__dato">
            <em>Correo</em>
            <p>Jesusivan@mail.com</p>
          </div>
          <div class="perfil__dato">
            <em>Fecha Nacimiento</em>
            <p>11 noviembre de 2026</p>
          </div>
          <hr class="dash" />
          <button>Editar</button>
        </div>
      </div>
      <div class="pedidos" id="pedidos">
        <h2>Pedidos</h2>

      </div>
  `,
};

function navegarA(nombreVista) {
  const render = vistas[nombreVista];
  if (!render) return;

  renderizarEnMain(render());
}

//navegarA('inicio');

function generarInicio() {
  navegarA('inicio');
  const main = document.querySelector('main');
  if (main) main.className = 'inicio';
  document.querySelector('main')?.appendChild(generarCategorias());
}

function generarMenu() {
  navegarA('menu');
  const main = document.querySelector('main');
  if (main) main.className = 'menu';
  document.querySelector('main')?.appendChild(generarComidas());
}

function generarCrearCuenta() {
  navegarA('crearCuenta');
  const form = document.querySelector('form');
  const main = document.querySelector('main');
  if (main) main.className = 'formulario';
  form?.insertBefore(generarCamposCrear(), form.querySelector('button'));
}

function generarIniciarSesion() {
  navegarA('iniciarSesion');
  const form = document.querySelector('form');
  const main = document.querySelector('main');
  if (main) main.className = 'formulario';
  form?.insertBefore(generarCamposIniciar(), form.querySelector('button'));
}

function generarPerfil() {
  navegarA('perfil');
  const pedidos = document.querySelector('#pedidos');
  const main = document.querySelector('main');
  if (main) main.className = 'usuario';
  pedidos?.appendChild(generarTickets());
}

opcionInicio?.addEventListener('click', () => {
  generarInicio();
  cambiarEstadoMenu(true);
});

opcionMenu?.addEventListener('click', () => {
  generarMenu();
  cambiarEstadoMenu(true);
});

opcionCrearCuenta?.addEventListener('click', () => {
  generarCrearCuenta();
  cambiarEstadoMenu(true);
});

opcionIniciarSesion?.addEventListener('click', () => {
  generarIniciarSesion();
  cambiarEstadoMenu(true);
});

opcionPerfil?.addEventListener('click', () => {
  generarPerfil();
  cambiarEstadoMenu(true);
});

generarPerfil();

document.addEventListener('click-ticket', (e) => {
  document.querySelector('dialog-ticket')?.open();
  document.querySelector('dialog-ticket').total = e.detail['total'];
  document.querySelector('dialog-ticket').fecha = convertirFecha(e.detail['fecha']).formatoTicket;
  document.querySelector('dialog-ticket').estado = e.detail['estado'];
  document.querySelector('dialog-ticket').idPedido = e.detail["identificador"];
});

/*
dialog?.addEventListener('click', (e) => {
  if (e.target === dialog) dialog.close();
});

*/

function convertirFecha(textoFecha, { sigloCorto = 2000, locale = 'es-MX' } = {}) {
  const limpia = textoFecha.trim().replace(/\s*\/\s*/g, '/');
  const partes = limpia.split('/');

  if (partes.length !== 3) {
    throw new Error(`Formato de fecha inválido: "${textoFecha}"`);
  }

  const [diaStr, mesStr, anioStr] = partes;
  const dia = Number(diaStr);
  const mes = Number(mesStr);
  let anio = Number(anioStr);

  if (Number.isNaN(dia) || Number.isNaN(mes) || Number.isNaN(anio)) {
    throw new Error(`La fecha contiene valores no numéricos: "${textoFecha}"`);
  }

  if (anioStr.length <= 2) {
    anio += sigloCorto;
  }

  const fecha = new Date(anio, mes - 1, dia);

  const esValida =
    fecha.getFullYear() === anio && fecha.getMonth() === mes - 1 && fecha.getDate() === dia;

  if (!esValida) {
    throw new Error(`Fecha inexistente en el calendario: "${textoFecha}"`);
  }

  const capitalizar = (str) => str.charAt(0).toUpperCase() + str.slice(1);

  const diaSemana = capitalizar(new Intl.DateTimeFormat(locale, { weekday: 'long' }).format(fecha));
  const nombreMes = capitalizar(new Intl.DateTimeFormat(locale, { month: 'long' }).format(fecha));

  const formatoTicket = `${diaSemana}, ${nombreMes} ${dia}, ${anio}`;

  return {
    dia,
    mes,
    anio,
    diaSemana,
    nombreMes,
    formatoTicket,
    date: fecha,
  };
}

console.log('script completo, listeners registrados');
