const generarTabla = (lista) => {
  const tabla = document.createElement('table');
  const titulos = document.createElement('tr');

  for (let i = 0; i < lista.length(); i++) {
    const titulo = document.createElement('th');
    titulo.textContent = lista[i];
    titulos.appendChild(titulo);
  }

  tabla.appendChild(titulos);
  return tabla;
};

export default generarTabla;
