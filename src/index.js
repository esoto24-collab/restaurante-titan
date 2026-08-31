const main = document.querySelector('#main');

for (let i = 0; i < 8; i++) {
  const div = document.createElement('div');
  const informativo = document.createElement('div');
  informativo.textContent="ey ey ey"
  const p = document.createElement('p');
  p.textContent = 'Imagen';
  div.appendChild(p);
  div.appendChild(informativo)
  main.appendChild(div);
}
