import crearUsuario from './crearUsuario.js';
import { guardarUsuario } from './gestorUsuarios.js';
import formularioLogin from './crearFormLogin.js';

const main = document.querySelector('#main');

const inputs = {
  nombre: {
    titulo: 'Nombre',
    type: 'text',
    //minlength: '2',
    //maxlength: '50',
    id: 'name',
    placeholder: 'Ingresa tu nombre...',
  },

  apellido: {
    titulo: 'Apellido',
    type: 'text',
    //minlength: '2',
    //maxlength: '50',
    id: 'apellido',
    placeholder: 'Ingresa tu apellido...',
  },

  fecha_nacimiento: {
    titulo: 'Fecha de nacimiento',
    type: 'date',
    //min: '1916-01-01',
    id: 'date',
  },

  email: {
    titulo: 'Correo',
    type: 'email',
    id: 'email',
    placeholder: 'ejemplo@email.com',
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
    id: 'password-repeat',
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

  label.appendChild(input);
  return label;
};

const formulario = () => {
  main.innerHTML = '';
  main.className = '';
  main.classList.add('main-formulario');
  const div = document.createElement('div');

  const titulo = document.createElement('h2');
  titulo.textContent = 'Crear Cuenta';

  const form = document.createElement('form');
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

    const usuario = crearUsuario(nombre.value, apellido.value, date.value, email.value,password.value);
    guardarUsuario(usuario);

    form.reset();

    main.innerHTML = '';
    formularioLogin();
    console.log('Cuenta Generada');
  });

  div.appendChild(titulo);
  div.appendChild(form);

  main.appendChild(div);
};

export default formulario;
