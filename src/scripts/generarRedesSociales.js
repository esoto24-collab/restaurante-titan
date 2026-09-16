const redes = [
  { nombre: 'discord', albl: 'Unirse a nuestro servidor de Discord' },
  { nombre: 'youtube', albl: 'Visitar nuestro canal de YouTube' },
  { nombre: 'instagram', albl: 'Visitar nuestra cuenta de Instagram' },
  { nombre: 'github', albl: 'Visitar nuestro repositorio de GitHub' },
  { nombre: 'facebook', albl: 'Visitar nuestra página de Facebook' },
  { nombre: 'twitter', albl: 'Visitar nuestra página de Twitter' },
];

const generarRedLink = (red) => {
  const link = document.createElement('a');
  link.href = 'https://github.com/esoto24-collab/restaurante-titan';
  link.target = '_blank';
  link.rel = 'noopener noreferrer';
  link.setAttribute('aria-label', red.albl);

  const wrapper = document.createElement('div');
  wrapper.className = 'icon-wrapper';
  wrapper.title = `Abrir ${red.nombre.toUpperCase()}`;

  const icon = document.createElement('div');
  icon.className = `icon ${red.nombre}`;

  wrapper.appendChild(icon);
  link.appendChild(wrapper);
  return link;
};

const generarRedesSociales = () => {
  const socialMedia = document.querySelector('#socialMedia');
  if (!socialMedia) return;
  socialMedia.innerHTML = '';
  redes.forEach((red) => {
    socialMedia.appendChild(generarRedLink(red));
  });
};

export default generarRedesSociales;
