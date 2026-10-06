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
<<<<<<< HEAD
const user_options = document.querySelector('#user_options');
const desactivarUsuario = document.querySelector('#desactivar_usuario');
const lateral_perfil = document.querySelector('#lateral_perfil');
const dashboard_lateral = document.querySelector("#dashboard_lateral")
=======
const user_options = document.querySelector('#user__options');
const desactivar_usuario = document.querySelector('#desactivar__usuario');
const lateral_perfil = document.querySelector('#barra-lateral__perfil');
>>>>>>> 9d902c0e327c745cdadb7411a1571fa2ed6933f7


const perfil_opcion = document.querySelectorAll('.perfil_opcion')

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

usuario.addEventListener('click', () => {
  user_options.classList.toggle('invisible');
});

desactivar_usuario.addEventListener('click', () => {
  console.log('Desactivar Usuario');
  asignarPerfil(null);
});

lateral_perfil.addEventListener('click', () => {
  for(let i=0; i<perfil_opcion.length; i++){
    perfil_opcion[i].classList.toggle('invisible')
  }
});

dashboard_lateral.addEventListener("click",()=>{
  generarDashboard();
})

generarDashboard();

