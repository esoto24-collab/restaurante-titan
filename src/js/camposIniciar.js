import '../components/ticketCard/ticketCard.js';

const campos = [
  {
    identificador: 'correo',
    nombre: 'Correo electrónico',
    tipo: 'email',
    ejemplo: 'Ingresa tu correo',
    error: 'error-correo',
  },
  {
    identificador: 'password',
    nombre: 'Contraseña',
    tipo: 'password',
    ejemplo: 'Ingresa tu contraseña',
    error: 'error-password',
  },
];

export function generarCamposIniciar() {
  const contenedor = document.createElement('div');
  contenedor.classList.add('campos');
  campos.forEach((campo) => {
    const formCampo = document.createElement('form-campo');
    formCampo.identificador=campo["identificador"]
    formCampo.nombre=campo["nombre"]
    formCampo.tipo=campo["tipo"]
    formCampo.ejemplo=campo["ejemplo"]
    formCampo.minimo=campo["minimo"] ?? 0
    formCampo.maximo=campo["maximo"] ?? 999
    contenedor.appendChild(formCampo);
  });
  return contenedor;
}
