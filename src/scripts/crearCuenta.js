
const tarjetas = document.querySelector('#tarjetas');
const iniciar = document.querySelector('#iniciar__sesion');
export const usuarios = [];



iniciar.addEventListener('click', () => {
  tarjetas.innerHTML = '';
  tarjetas.classList.remove('main__inicio');
  tarjetas.classList.remove('main__tabla');
  tarjetas.classList.add('main__formulario');
});
