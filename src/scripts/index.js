import generarInicio from './generarInicio.js';
import generarRedesSociales from './generarRedesSociales.js';
import formulario from './crearFormNewUser.js';
import formularioLogin from './crearFormLogin.js';
import crearMenu from './crearMenu.js';

const body = document.body;
const inicio = document.querySelector('#inicio');
const crear_cuenta = document.querySelector('#crear_cuenta');
const iniciar_sesion = document.querySelector('#iniciar_sesion');
const titulo = document.querySelector('#titulo_principal');
const menu = document.querySelector('#menu');
const barra_lateral = document.querySelector('#barra_lateral');
const lateral_inicio = document.querySelector('#lateral_inicio');
const lateral_iniciar = document.querySelector('#lateral_iniciar');
const lateral_crear = document.querySelector('#lateral_crear');
const salir = document.querySelector('#salir');
const lateral_menu = document.querySelector('#lateral_menu');
const menu_hamburguesa = document.querySelector('#menu_hamburguesa');
const usuario = document.querySelector("#usuario");
const user_options = document.querySelector("#user_options")

generarInicio();
generarRedesSociales();

inicio.addEventListener('click', generarInicio);
iniciar_sesion.addEventListener('click', formularioLogin);
titulo.addEventListener('click', generarInicio);
crear_cuenta.addEventListener('click', formulario);
menu.addEventListener('click', crearMenu);

lateral_menu.addEventListener("click",()=>{
  barra_lateral.classList.toggle('visible');
  crearMenu()
  body.classList.toggle('shadow');
})

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

usuario.addEventListener('click',()=>{
  user_options.classList.toggle('invisible')
})



