import '../components/formCampo/formCampo.js';

const campos = [
  {
    identificador: 'nombre-completo',
    nombre: 'Nombre completo',
    tipo: 'text',
    ejemplo: 'Ej. Ana Pérez',
    error: 'error-nombre',
    minimo: "2",
    maximo: "223",
  },
  {
    identificador: 'correo',
    nombre: 'Correo electrónico',
    tipo: 'email',
    ejemplo: 'ana@ejemplo.com',
    error: 'error-correo',
    minimo: "10",
    maximo: "22",
  },
  {
    identificador: 'fecha-nacimiento',
    nombre: 'Fecha de nacimiento',
    tipo: 'date',
    ejemplo: null,
    error: 'error-fecha-nacimiento',
    minimo: null,
    maximo: null,
  },
  {
    identificador: 'telefono',
    nombre: 'Teléfono',
    tipo: 'tel',
    ejemplo: '+52 612 000 0000',
    error: 'error-telefono',
    minimo: "2",
    maximo: "20",
  },
  {
    identificador: 'password',
    nombre: 'Contraseña',
    tipo: 'password',
    ejemplo: 'Mínimo 8 caracteres',
    error: 'error-password',
    minimo: "8",
    maximo: "64",
  },
];

export function generarCamposCrear() {
  const contenedor = document.createElement('div');
  contenedor.classList.add('campos');
  campos.forEach((campo) => {
    const formCampo = document.createElement('form-campo');
    formCampo.identificador=campo["identificador"]
    formCampo.nombre=campo["nombre"]
    formCampo.tipo=campo["tipo"]
    formCampo.ejemplo=campo["ejemplo"]
    formCampo.minimo=campo["minimo"]
    formCampo.maximo=campo["maximo"]
    contenedor.appendChild(formCampo);
  });
  return contenedor;
}
