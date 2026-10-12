const nombre_usuario = document.querySelector('#nombre__usuario');
const usuario_letra = document.querySelector('#usuario__letra');
const botones_header = document.querySelector('#botones__header');
const usuario = document.querySelector('#usuario');
const user_options = document.querySelector("#user__options")
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
  console.log(primera_letra)
  nombre_usuario.textContent = perfil.getNombre();
  usuario_letra.textContent = primera_letra;
};
