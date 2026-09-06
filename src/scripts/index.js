import generarInicio from './generarInicio.js';
import generarRedesSociales from './generarRedesSociales.js';
import formulario from './crearFormNewUser.js';
import formularioLogin from './crearFormLogin.js';
import crearMenu from './crearMenu.js';


const crear_cuenta = document.querySelector('#crear_cuenta');
const iniciar_sesion = document.querySelector('#iniciar_sesion');
const titulo = document.querySelector('#titulo_principal');
const menu = document.querySelector("#menu")


generarInicio();
generarRedesSociales();

iniciar_sesion.addEventListener('click', formularioLogin);
titulo.addEventListener('click', generarInicio);
crear_cuenta.addEventListener('click', formulario);
menu.addEventListener("click",crearMenu)
