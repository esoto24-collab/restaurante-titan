import formulario from './crearFormNewUser.js';
import generarInicio from './generarInicio.js';

const main = document.querySelector('#main');

const formularioLogin = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  main.innerHTML = '';
  main.className = 'main-formulario';

  const card = document.createElement('div');
  card.className = 'formulario-card';

  card.innerHTML = `
    <div class="formulario-header">
      <span class="formulario-badge">ACCESO A TITANES</span>
      <h2 class="formulario-titulo">INICIAR SESIÓN</h2>
      <p class="formulario-subtitulo">Ingresa con tu cuenta para desbloquear promociones y acumular puntos titánicos.</p>
    </div>
    <form class="formulario-form" id="form_login">
      <div class="formulario-campo">
        <label for="login_email">Correo Electrónico:</label>
        <input type="email" id="login_email" name="email" placeholder="ejemplo@email.com" required autocomplete="email" />
      </div>
      <div class="formulario-campo">
        <label for="login_password">Contraseña:</label>
        <input type="password" id="login_password" name="password" placeholder="Tu contraseña secreta" required autocomplete="current-password" />
      </div>
      <button type="submit" class="formulario-btn-submit" id="btn_login_submit">ENTRAR AL SISTEMA 🚀</button>
      <div id="login_feedback" class="formulario-feedback"></div>
    </form>
    <div class="formulario-toggle-box">
      <span>¿No tienes una cuenta aún?</span>
      <button type="button" class="formulario-toggle-btn" id="btn_ir_crear_cuenta">Regístrate aquí</button>
    </div>
  `;

  const form = card.querySelector('#form_login');
  const feedback = card.querySelector('#login_feedback');
  const btnToggle = card.querySelector('#btn_ir_crear_cuenta');

  btnToggle.addEventListener('click', formulario);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    feedback.className = 'formulario-feedback loading';
    feedback.textContent = 'Verificando credenciales titánicas...';

    setTimeout(() => {
      feedback.className = 'formulario-feedback success';
      feedback.textContent = '¡Bienvenido de vuelta, Titán! Redirigiendo...';
      setTimeout(() => {
        generarInicio();
      }, 1200);
    }, 800);
  });

  main.appendChild(card);
};

export default formularioLogin;
