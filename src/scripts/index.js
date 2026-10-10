import { asignarPerfil } from './perfil.js';
import generarInicio from './generarInicio.js';
import generarRedesSociales from './generarRedesSociales.js';
import formulario from './crearFormNewUser.js';
import formularioLogin from './crearFormLogin.js';
import crearMenu from './crearMenu.js';
import { generarDashboard } from './dashboard.js';

const body = document.body;
const inicio = document.querySelector('#inicio');
const crear_cuenta = document.querySelector('#crear__cuenta');
const iniciar_sesion = document.querySelector('#iniciar__sesion');
const titulo = document.querySelector('#titulo__principal');
const menu = document.querySelector('#menu');
const barra_lateral = document.querySelector('#barra-lateral');
const lateral_inicio = document.querySelector('#barra-lateral__inicio');
const lateral_iniciar = document.querySelector('#barra-lateral__iniciar');
const lateral_crear = document.querySelector('#barra-lateral__crear');
const salir = document.querySelector('#salir');
const lateral_menu = document.querySelector('#barra-lateral__menu');
const menu_hamburguesa = document.querySelector('#menu__hamburguesa');
const usuario = document.querySelector('#usuario');
const dashboard_lateral = document.querySelector('#dashboard__lateral');
const user_options = document.querySelector('#user__options');
const desactivar_usuario = document.querySelector('#desactivar__usuario');
const lateral_perfil = document.querySelector('#barra-lateral__perfil');
const option__dashboard = document.querySelector('#option__dashboard');
const perfil_opcion = document.querySelectorAll('.perfil__opcion');

generarInicio();
generarRedesSociales();

inicio.addEventListener('click', generarInicio);
iniciar_sesion.addEventListener('click', formularioLogin);
titulo.addEventListener('click', generarInicio);
crear_cuenta.addEventListener('click', formulario);
menu.addEventListener('click', crearMenu);

lateral_menu.addEventListener('click', () => {
  barra_lateral.classList.toggle('visible');
  crearMenu();
  body.classList.toggle('shadow');
});

menu_hamburguesa.addEventListener('click', () => {
  barra_lateral.classList.toggle('visible');
  body.classList.toggle('shadow');
});

lateral_inicio.addEventListener('click', () => {
  barra_lateral.classList.toggle('visible');
  generarInicio();
  body.classList.toggle('shadow');
});

lateral_crear.addEventListener('click', () => {
  barra_lateral.classList.toggle('visible');
  formulario();
  body.classList.toggle('shadow');
});

lateral_iniciar.addEventListener('click', () => {
  barra_lateral.classList.toggle('visible');
  formularioLogin();
  body.classList.toggle('shadow');
});

salir.addEventListener('click', () => {
  barra_lateral.classList.toggle('visible');
  body.classList.toggle('shadow');
});

usuario.addEventListener('mouseenter', () => {
  user_options.classList.toggle('invisible');
});


desactivar_usuario.addEventListener('click', () => {
  console.log('Desactivar Usuario');
  asignarPerfil(null);
});

lateral_perfil.addEventListener('click', () => {
  console.log('ey');
  for (let i = 0; i < perfil_opcion.length; i++) {
    perfil_opcion[i].classList.toggle('invisible');
  }
});


dashboard_lateral.addEventListener('click', () => {
  generarDashboard();
});


option__dashboard.addEventListener('click', () => {
  console.log('ey');
  generarDashboard();
});

//generarDashboard();
