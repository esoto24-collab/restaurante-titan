
const main = document.querySelector('#main');
const titulo = document.querySelector("#tituloPrincipal")

const addCuadros = () => {
  main.innerHTML=""
  main.classList.remove('main-tabla');
  main.classList.remove("main-formulario")
  main.classList.add("main-inicio")
  for (let i = 0; i < 8; i++) {
    const div = document.createElement('div');
    const informativo = document.createElement('div');
    const nombreProducto = document.createElement('p');
    const precioProducto = document.createElement('strong');
    nombreProducto.textContent = 'Hamburgruesa';
    precioProducto.textContent = '$200';
    informativo.appendChild(nombreProducto);
    informativo.appendChild(precioProducto);
    div.appendChild(informativo);
    main.appendChild(div);
  }
};

addCuadros()

titulo.addEventListener('click', addCuadros);

