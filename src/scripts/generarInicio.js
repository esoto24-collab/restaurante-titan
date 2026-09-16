import crearHero from './crearHero.js';
import crearTarjetas from './crearTarjetas.js';
import crearMenu from './crearMenu.js';

const main = document.querySelector('#main');

const generarInicio = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  main.innerHTML = '';
  main.className = 'main-inicio';

  // Hero section
  const hero = document.createElement('section');
  hero.className = 'hero';
  hero.id = 'hero';
  main.appendChild(hero);

  // Categorías destacadas section
  const contenedorCategorias = document.createElement('section');
  contenedorCategorias.className = 'seccion-categorias';
  contenedorCategorias.innerHTML = `
    <div class="seccion-header">
      <div class="seccion-badge">EXPLORA NUESTRO ARSENAL</div>
      <h3 class="seccion-titulo">CATEGORÍAS MONUMENTALES</h3>
      <p class="seccion-sub">Porciones gigantes preparadas con ingredientes de primera calidad para alimentar a verdaderos titanes.</p>
    </div>
    <div class="tarjetas inicio" id="tarjetas"></div>
  `;
  main.appendChild(contenedorCategorias);

  // Banner CTA de Reto Mortal
  const bannerReto = document.createElement('section');
  bannerReto.className = 'banner-reto-inicio';
  bannerReto.innerHTML = `
    <div class="banner-reto-card">
      <div class="banner-reto-tag">⚡ DESAFÍO ACTIVO ⚡</div>
      <h3 class="banner-reto-titulo">¿PUEDES VENCER A LA TITÁNICA DE 3.5 KG?</h3>
      <p class="banner-reto-desc">Más de 250 valientes lo han intentado y solo 3 lo han logrado. Si la terminas en 25 minutos, ¡tu comida es GRATIS y ganas $5,000 MXN!</p>
      <div class="banner-reto-actions">
        <button id="btn_ir_menu" class="btn-banner-menu" type="button">ORDENAR COMIDA AHORA 🍔</button>
        <a href="src/pages/retos-mortales.html" class="btn-banner-retos">VER TABLA DE LÍDERES 🏆</a>
      </div>
    </div>
  `;
  main.appendChild(bannerReto);

  crearHero();
  crearTarjetas();

  const btnIrMenu = bannerReto.querySelector('#btn_ir_menu');
  if (btnIrMenu) {
    btnIrMenu.addEventListener('click', crearMenu);
  }
};

export default generarInicio;
