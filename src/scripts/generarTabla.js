const generarTabla = (titulosLista = [], filasDatos = []) => {
  const wrapper = document.createElement('div');
  wrapper.className = 'table-wrapper';

  const tabla = document.createElement('table');
  const thead = document.createElement('thead');
  const filaTitulos = document.createElement('tr');

  for (let i = 0; i < titulosLista.length; i++) {
    const th = document.createElement('th');
    th.textContent = titulosLista[i];
    filaTitulos.appendChild(th);
  }
  thead.appendChild(filaTitulos);
  tabla.appendChild(thead);

  const tbody = document.createElement('tbody');
  if (Array.isArray(filasDatos)) {
    filasDatos.forEach((fila) => {
      const tr = document.createElement('tr');
      fila.forEach((celda) => {
        const td = document.createElement('td');
        td.textContent = celda;
        tr.appendChild(td);
      });
      tbody.appendChild(tr);
    });
  }
  tabla.appendChild(tbody);
  wrapper.appendChild(tabla);
  return wrapper;
};

export default generarTabla;
