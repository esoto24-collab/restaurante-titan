const main = document.querySelector('#main');

for (let i = 0; i < 8; i++) {
  const div = document.createElement('div');
  const informativo = document.createElement('div');
  const nombreProducto = document.createElement('p')
  const precioProducto = document.createElement('strong')
  nombreProducto.textContent="Hamburgruesa"
  precioProducto.textContent="$200"
  informativo.appendChild(nombreProducto)
  informativo.appendChild(precioProducto)
  div.appendChild(informativo)
  main.appendChild(div);
}
