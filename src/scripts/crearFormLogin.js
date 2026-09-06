const main = document.querySelector('#main');

const inputs = {
  email: {
    titulo: 'Correo',
    type: 'email',
    id: 'email',
    placeholder: 'Ingresa tu email',
  },

  password: {
    titulo: 'Contraseña',
    type: 'password',
    id: 'password',
    placeholder: 'Ingresa tu contraseña',
  },
};

const cajita = (dato) => {
  console.log(dato);
  const label = document.createElement('label');
  label.textContent = dato.titulo;

  const input = document.createElement('input');
  input.type = dato.type;
  input.required = false;
  input.name = dato.id;
  input.id = dato.id;
  dato.placeholder != undefined ? (input.placeholder = dato.placeholder) : (input.placeholder = '');

  label.appendChild(input);
  return label;
};

const formularioLogin = () => {
  main.innerHTML = '';
  main.className = '';
  main.classList.add('main-formulario');
  const div = document.createElement('div');

  const titulo = document.createElement('h2');
  titulo.textContent = 'Iniciar Sesion';

  const form = document.createElement('form');
  const btnSubmit = document.createElement('button');
  btnSubmit.type = 'submit';
  btnSubmit.textContent = 'Guardar';
  btnSubmit.id = 'subir';

  for (const clave in inputs) {
    form.appendChild(cajita(inputs[clave]));
  }

  form.appendChild(btnSubmit);

  /*
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.querySelector('#name');
    const apellido = document.querySelector('#apellido');
    const date = document.querySelector('#date');
    const email = document.querySelector('#email');

    const usuario = crearUsuario(nombre.value, apellido.value, date.value, email.value);
    usuarios.push(usuario);

    nombre.value = '';
    apellido.value = '';
    date.value = '';
    email.value = '';

    tarjetas.innerHTML = '';
    tarjetas.classList.remove('main-formulario');
    tarjetas.classList.add('main-tabla');
    tarjetas.appendChild(generarTabla());

  })*/

  div.appendChild(titulo);
  div.appendChild(form);

  main.appendChild(div);
};

export default formularioLogin;


