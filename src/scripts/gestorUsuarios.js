const usuarios = [];

export function guardarUsuario(usuario) {
  usuarios.push(usuario);
}

export function obtenerUsuarios() {
  return usuarios;
}