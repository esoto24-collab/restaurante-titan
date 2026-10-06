import generarInicio from './generarInicio.js';
import { obtenerUsuarios } from './gestorUsuarios.js';
import { asignarPerfil } from './perfil.js';

const barra_lateral_perfil = document.querySelector("#barra-#barra-lateral__perfil")
const barra_lateral_formulario = document.querySelector("#barra-lateral__formulario")
const botones__header = document.querySelector('#botones__header');
const usuario = document.querySelector('#usuario');
const main = document.querySelector('#main');
const usuarios = obtenerUsuarios();

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
  main.classList.add('main__formulario');
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

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.querySelector('#email');
    const password = document.querySelector('#password');

    for (let i = 0; i < usuarios.length; i++) {
      if (email.value === usuarios[i].getCorreo() && password.value === usuarios[i].getPassword()) {
        window.scrollTo({
          top: 0,
          behavior: 'smooth',
        });
        botones__header.classList.add('invisible');
        usuario.classList.remove('invisible');
        barra_lateral_formulario.classList.add('invisible');
        barra_lateral_perfil.classList.remove('invisible');
        asignarPerfil(usuarios[i]);
        generarInicio();
        break;
      }
    }
  });

  div.appendChild(titulo);
  div.appendChild(form);

  main.appendChild(div);
};

export default formularioLogin;
