import '../components/socialCard/socialCard.js';

const linksSVG = [
  '/src/assets/svg/youtube.svg',
  '/src/assets/svg/instagram.svg',
  '/src/assets/svg/twitter.svg',
  '/src/assets/svg/discord.svg',
  '/src/assets/svg/facebook.svg',
  '/src/assets/svg/github.svg',
];

export function generarRedesSociales() {
  const contenedor = document.createElement('div');
  contenedor.classList.add("links")
  linksSVG.forEach((svg) => {
    const socialCard = document.createElement('social-card');
    socialCard.setAttribute('imagen', svg);
    contenedor.appendChild(socialCard);
  });
  return contenedor
}