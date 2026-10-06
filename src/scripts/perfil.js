const nombre__usuario = document.querySelector('#nombre__usuario');
const usuario_letra = document.querySelector('#usuario_letra');
const botones__header = document.querySelector('#botones__header');
const usuario = document.querySelector('#usuario');
const user__options = document.querySelector("#user__options")
let perfil = null;

export const asignarPerfil = (nuevoPerfil) => {
  perfil = nuevoPerfil;
  if (perfil != null) {
    actualizarPerfil();
  } else {
    botones__header.classList.toggle('invisible');
    usuario.classList.toggle('invisible');
    user__options.classList.toggle('invisible')
  }
};

const actualizarPerfil = () => {
  const primera_letra = perfil.getNombre().charAt(0).toUpperCase();
  nombre__usuario.textContent = perfil.getNombre();
  usuario_letra.textContent = primera_letra;
};
