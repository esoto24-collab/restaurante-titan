import generarInicio from './generarInicio.js';
import generarRedesSociales from './generarRedesSociales.js';
import formulario from './crearFormNewUser.js';
import formularioLogin from './crearFormLogin.js';
import crearMenu from './crearMenu.js';

const usuarios = [];

const body = document.body;
const inicio = document.querySelector('#inicio');
const crear_cuenta = document.querySelector('#crear_cuenta');
const iniciar_sesion = document.querySelector('#iniciar_sesion');
const titulo = document.querySelector('#titulo_principal');
const menu = document.querySelector('#menu');
const barra_lateral = document.querySelector('#barra_lateral');


const menu_hamburguesa = document.querySelector("#menu_hamburguesa");

generarInicio();
generarRedesSociales();

inicio.addEventListener('click', generarInicio);
iniciar_sesion.addEventListener('click', formularioLogin);
titulo.addEventListener('click', generarInicio);
crear_cuenta.addEventListener('click', formulario);
menu.addEventListener('click', crearMenu);

menu_hamburguesa.addEventListener("click",() =>{
    barra_lateral.classList.toggle("visible")
    body.classList.toggle("shadow")
})
