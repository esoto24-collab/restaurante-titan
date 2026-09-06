const redes = ['discord', 'youtube', 'instagran', 'github', 'facebook', 'twitter'];
const socialMedia = document.querySelector('#socialMedia');

const generarRedLink = (i) => {
  const link = document.createElement('a');
  link.href = 'https://github.com/esoto24-collab/restaurante-titan';
  link.target = '_blank';
  link.rel = 'noopener';
  const icon = document.createElement('div');
  icon.classList.add('icon');
  icon.classList.add(redes[i]);
  const titleLink = ('Abrir ' + redes[i]).toUpperCase();
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
