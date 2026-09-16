import generarInicio from './generarInicio.js';
import generarRedesSociales from './generarRedesSociales.js';
import formulario from './crearFormNewUser.js';
import formularioLogin from './crearFormLogin.js';
import crearMenu from './crearMenu.js';

// Elementos de navegación Desktop
const inicio = document.querySelector('#inicio');
const menu = document.querySelector('#menu');
const navRetos = document.querySelector('#nav_retos');
const logoBtn = document.querySelector('#logo_btn');
const crearCuentaBtn = document.querySelector('#crear_cuenta');
const iniciarSesionBtn = document.querySelector('#iniciar_sesion');

// Elementos del Cajón Lateral / Móvil
const barraLateral = document.querySelector('#barra_lateral');
const backdropLateral = document.querySelector('#backdrop_lateral');
const menuHamburguesa = document.querySelector('#menu_hamburguesa');
const cerrarLateralBtn = document.querySelector('#cerrar_lateral');
const mobileInicio = document.querySelector('#mobile_inicio');
const mobileMenu = document.querySelector('#mobile_menu');
const mobileRetos = document.querySelector('#mobile_retos');
const mobileCrearCuenta = document.querySelector('#mobile_crear_cuenta');
const mobileIniciarSesion = document.querySelector('#mobile_iniciar_sesion');

// Elementos de navegación Footer
const footerInicio = document.querySelector('#footer_inicio');
const footerMenu = document.querySelector('#footer_menu');
const footerRetos = document.querySelector('#footer_retos');

// Control de active en navbar
const navItems = document.querySelectorAll('.navbar .nav-item');
const setActiveNav = (activeElement) => {
  navItems.forEach((item) => item.classList.remove('active'));
  if (activeElement) {
    activeElement.classList.add('active');
  }
};

// Control del menú lateral
const abrirMenuLateral = () => {
  barraLateral.classList.add('visible');
  backdropLateral.classList.add('visible');
  barraLateral.setAttribute('aria-hidden', 'false');
};

const cerrarMenuLateral = () => {
  barraLateral.classList.remove('visible');
  backdropLateral.classList.remove('visible');
  barraLateral.setAttribute('aria-hidden', 'true');
};

// Handlers de navegación
const navegarAInicio = () => {
  setActiveNav(inicio);
  cerrarMenuLateral();
  generarInicio();
};

const navegarAMenu = () => {
  setActiveNav(menu);
  cerrarMenuLateral();
  crearMenu();
};

const navegarACrearCuenta = () => {
  setActiveNav(null);
  cerrarMenuLateral();
  formulario();
};

const navegarAIniciarSesion = () => {
  setActiveNav(null);
  cerrarMenuLateral();
  formularioLogin();
};

const navegarARetos = () => {
  cerrarMenuLateral();
  window.location.href = 'src/pages/retos-mortales.html';
};

// Inicialización
generarInicio();
generarRedesSociales();

// Listeners Desktop
if (inicio) inicio.addEventListener('click', navegarAInicio);
if (menu) menu.addEventListener('click', navegarAMenu);
if (navRetos) navRetos.addEventListener('click', navegarARetos);
if (logoBtn) {
  logoBtn.addEventListener('click', navegarAInicio);
  logoBtn.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      navegarAInicio();
    }
  });
}
if (crearCuentaBtn) crearCuentaBtn.addEventListener('click', navegarACrearCuenta);
if (iniciarSesionBtn) iniciarSesionBtn.addEventListener('click', navegarAIniciarSesion);

// Listeners Móvil
if (menuHamburguesa) menuHamburguesa.addEventListener('click', abrirMenuLateral);
if (cerrarLateralBtn) cerrarLateralBtn.addEventListener('click', cerrarMenuLateral);
if (backdropLateral) backdropLateral.addEventListener('click', cerrarMenuLateral);

if (mobileInicio) mobileInicio.addEventListener('click', navegarAInicio);
if (mobileMenu) mobileMenu.addEventListener('click', navegarAMenu);
if (mobileRetos) mobileRetos.addEventListener('click', navegarARetos);
if (mobileCrearCuenta) mobileCrearCuenta.addEventListener('click', navegarACrearCuenta);
if (mobileIniciarSesion) mobileIniciarSesion.addEventListener('click', navegarAIniciarSesion);

// Listeners Footer
if (footerInicio) footerInicio.addEventListener('click', navegarAInicio);
if (footerMenu) footerMenu.addEventListener('click', navegarAMenu);
if (footerRetos) footerRetos.addEventListener('click', navegarARetos);
