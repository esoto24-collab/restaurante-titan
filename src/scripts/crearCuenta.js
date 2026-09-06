
const tarjetas = document.querySelector('#tarjetas');
const iniciar = document.querySelector('#iniciar-sesion');
export const usuarios = [];



iniciar.addEventListener('click', () => {
  tarjetas.innerHTML = '';
  tarjetas.classList.remove('main-inicio');
  tarjetas.classList.remove('main-tabla');
  tarjetas.classList.add('main-formulario');
});
