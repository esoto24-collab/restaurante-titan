import crearMenu from './crearMenu.js';

const crearHero = () => {
  const hero = document.querySelector('#hero');
  if (!hero) return;

  hero.innerHTML = `
    <div class="hero-content">
      <div class="hero-badge">
        <span>★</span>
        <span>EL AUTÉNTICO SABOR TITÁNICO</span>
        <span>★</span>
      </div>
      <h2 class="hero-title">SIN COMIDA NO HAY GLORIA</h2>
      <p class="hero-subtitle">
        Hamburguesas, pizzas, alitas y sushi de proporciones legendarias. Comida gigante creada para saciar a verdaderos titanes.
      </p>
      <div class="hero-cta-wrapper">
        <button id="btn_menu" class="btn-hero-primary" type="button">VER MENÚ BRUTAL →</button>
        <button id="btn_retos_hero" class="btn-hero-secondary" type="button">RETOS MORTALES 🏆</button>
      </div>
    </div>
  `;

  const btnMenu = hero.querySelector('#btn_menu');
  if (btnMenu) {
    btnMenu.addEventListener('click', crearMenu);
  }

  const btnRetos = hero.querySelector('#btn_retos_hero');
  if (btnRetos) {
    btnRetos.addEventListener('click', () => {
      window.location.href = 'src/pages/retos-mortales.html';
    });
  }
};

export default crearHero;