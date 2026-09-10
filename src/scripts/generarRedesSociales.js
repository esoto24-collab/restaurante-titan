const redes = [{nombre: 'discord', albl: 'Unirse a nuestro servidor de discord'}, {nombre: 'youtube', albl: 'Visitar nuestro canal de youtube'}, {nombre: 'instagram', albl: 'Visitar nuestra cuenta de instagram'}, {nombre: 'github', albl: 'Visitar nuestro repositorio de github'}, {nombre: 'facebook', albl: 'Visitar nuestra pagina de facebook'}, {nombre: 'twitter', albl: 'Visitar nuestra pagina de twitter'}];
const socialMedia = document.querySelector('#socialMedia');

const generarRedLink = (i) => {
  const link = document.createElement('a');
  link.href = 'https://github.com/esoto24-collab/restaurante-titan';
  link.target = '_blank';
  link.rel = 'noopener';
  link.ariaLabel = redes[i].albl;
  const icon = document.createElement('div');
  icon.classList.add('icon');
  icon.classList.add(redes[i].nombre);
  const titleLink = ('Abrir ' + redes[i].nombre).toUpperCase();
  icon.title = titleLink;
  link.appendChild(icon);
  return link;
};

const generarRedesSociales = () => {
  socialMedia.innerHTML = '';
  for (let i = 0; i < redes.length; i++) {
    socialMedia.appendChild(generarRedLink(i));
  }
};

export default generarRedesSociales;
