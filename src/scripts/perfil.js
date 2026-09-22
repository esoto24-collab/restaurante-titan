const nombre_usuario = document.querySelector('#nombre_usuario');
const letra_usuario = document.querySelector('#letra_usuario');

let perfil = null;

export const asignarPerfil = (nuevoPerfil) => {
  perfil = nuevoPerfil;
  actualizarPerfil();
};

const actualizarPerfil = () => {
  const primera_letra = perfil.getNombre().charAt(0).toUpperCase();
  nombre_usuario.textContent = perfil.getNombre();
  letra_usuario.textContent = primera_letra;
};
