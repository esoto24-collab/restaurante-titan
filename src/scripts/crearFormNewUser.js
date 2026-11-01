import crearUsuario from './crearUsuario.js';
import { guardarUsuario } from './gestorUsuarios.js';
import formularioLogin from './crearFormLogin.js';

const main = document.querySelector('#main');

const inputs = {
  nombre: {
    titulo: 'Nombre',
    type: 'text',
    id: 'name',
    placeholder: 'Ingresa tu nombre...',
    error: 'error-nombre-msg',
  },

  apellido: {
    titulo: 'Apellido',
    type: 'text',
    id: 'apellido',
    placeholder: 'Ingresa tu apellido...',
    error: 'error-apellido-msg',
  },

  fecha_nacimiento: {
    titulo: 'Fecha de nacimiento',
    type: 'date',
    id: 'date',
    error: 'error-fecha-nacimiento-msg',
  },

  email: {
    titulo: 'Correo',
    type: 'email',
    id: 'email',
    placeholder: 'ejemplo@email.com',
    error: 'error-email-msg',
  },

  password: {
    titulo: 'Contraseña',
    type: 'password',
    id: 'password',
    placeholder: 'Recuerda no compartir con nadie',
  },

  passwordRepeat: {
    titulo: 'Constraseña 2',
    type: 'password',
    id: 'password__repeat',
    placeholder: 'NUNCA LA OLVIDES!!!!',
  },
};

const cajita = (dato) => {
  const label = document.createElement('label');
  label.textContent = dato.titulo;

  const input = document.createElement('input');
  input.type = dato.type;
  input.required = true;
  input.name = dato.id;
  input.id = dato.id;
  dato.placeholder != undefined ? (input.placeholder = dato.placeholder) : (input.placeholder = '');
  input.dataset.errorPara = dato.error;

  const span = document.createElement('span');
  span.id = dato.error;
  span.textContent = 'eyy';

  label.appendChild(input);
  label.appendChild(span);
  return label;
};

const formulario = () => {
  main.innerHTML = '';
  main.className = '';
  main.classList.add('main__formulario');
  const div = document.createElement('div');

  const titulo = document.createElement('h2');
  titulo.textContent = 'Crear Cuenta';

  const form = document.createElement('form');
  form.noValidate = true;
  const btnSubmit = document.createElement('button');
  btnSubmit.type = 'submit';
  btnSubmit.textContent = 'Guardar';
  btnSubmit.id = 'subir';

  for (const clave in inputs) {
    form.appendChild(cajita(inputs[clave]));
  }

  form.appendChild(btnSubmit);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.querySelector('#name');
    const apellido = document.querySelector('#apellido');
    const date = document.querySelector('#date');
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');

    const usuario = crearUsuario(
      nombre.value,
      apellido.value,
      date.value,
      email.value,
      password.value
    );
    /*
    const usuario = Object.fromEntries(new FormData(form));
    console.log(usuario)
    */
    guardarUsuario(usuario);

    if (
      mostrarError(nombre) ||
      mostrarError(apellido) ||
      mostrarError(date) ||
      mostrarError(email) ||
      mostrarError(password)
    ) {
      form.reset();

      main.innerHTML = '';
      formularioLogin();
      console.log('Cuenta Generada');
    }
  });

  div.appendChild(titulo);
  div.appendChild(form);

  main.appendChild(div);
};

function mostrarError(input) {
  const mensajeError = document.getElementById(input.dataset.errorPara);
  mensajeError.style.display = 'block';
  //mensajeError.textContent = mensaje;

  if (!input.checkValidity()) {
    mensajeError.textContent = input.validationMessage;
    console.log(input.validationMessage);
    return false;
  }

  return true;
}

export default formulario;
