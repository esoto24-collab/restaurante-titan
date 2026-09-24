const nombre_usuario = document.querySelector('#nombre_usuario');
const letra_usuario = document.querySelector('#letra_usuario');
const botones_header = document.querySelector('#botones_header');
const usuario = document.querySelector('#usuario');
const user_options = document.querySelector("#user_options")
let perfil = null;

export const asignarPerfil = (nuevoPerfil) => {
  perfil = nuevoPerfil;
  if (perfil != null) {
    actualizarPerfil();
  } else {
    botones_header.classList.toggle('invisible');
    usuario.classList.toggle('invisible');
    user_options.classList.toggle('invisible')
  }
};

const actualizarPerfil = () => {
  const primera_letra = perfil.getNombre().charAt(0).toUpperCase();
  nombre_usuario.textContent = perfil.getNombre();
  letra_usuario.textContent = primera_letra;
};
