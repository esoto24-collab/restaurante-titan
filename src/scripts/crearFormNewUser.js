import formularioLogin from './crearFormLogin.js';
import generarInicio from './generarInicio.js';

const main = document.querySelector('#main');

const formulario = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' });
  main.innerHTML = '';
  main.className = 'main-formulario';

  const card = document.createElement('div');
  card.className = 'formulario-card';

  card.innerHTML = `
    <div class="formulario-header">
      <span class="formulario-badge">ÚNETE A LA LEGIÓN</span>
      <h2 class="formulario-titulo">CREAR CUENTA</h2>
      <p class="formulario-subtitulo">Regístrate para participar en retos mortales, guardar tus platillos favoritos y recibir ofertas exclusivas.</p>
    </div>
    <form class="formulario-form" id="form_registro">
      <div class="formulario-campo">
        <label for="reg_nombre">Nombre Completo:</label>
        <input type="text" id="reg_nombre" name="nombre" placeholder="Ej. Carlos Mendoza" required autocomplete="name" />
      </div>
      <div class="formulario-campo">
        <label for="reg_email">Correo Electrónico:</label>
        <input type="email" id="reg_email" name="email" placeholder="ejemplo@email.com" required autocomplete="email" />
      </div>
      <div class="formulario-campo">
        <label for="reg_fecha">Fecha de Nacimiento:</label>
        <input type="date" id="reg_fecha" name="fecha_nacimiento" required />
      </div>
      <div class="formulario-campo">
        <label for="reg_pass">Contraseña:</label>
        <input type="password" id="reg_pass" name="password" placeholder="Mínimo 8 caracteres" required autocomplete="new-password" />
      </div>
      <div class="formulario-campo">
        <label for="reg_pass_repeat">Confirmar Contraseña:</label>
        <input type="password" id="reg_pass_repeat" name="password_repeat" placeholder="Repite tu contraseña" required autocomplete="new-password" />
      </div>
      <button type="submit" class="formulario-btn-submit" id="btn_reg_submit">REGISTRAR CUENTA TITÁNICA 🛡️</button>
      <div id="reg_feedback" class="formulario-feedback"></div>
    </form>
    <div class="formulario-toggle-box">
      <span>¿Ya eres un titán registrado?</span>
      <button type="button" class="formulario-toggle-btn" id="btn_ir_login">Inicia sesión aquí</button>
    </div>
  `;

  const form = card.querySelector('#form_registro');
  const feedback = card.querySelector('#reg_feedback');
  const btnToggle = card.querySelector('#btn_ir_login');

  btnToggle.addEventListener('click', formularioLogin);

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const pass1 = card.querySelector('#reg_pass').value;
    const pass2 = card.querySelector('#reg_pass_repeat').value;

    if (pass1 !== pass2) {
      feedback.className = 'formulario-feedback error';
      feedback.style.display = 'block';
      feedback.style.backgroundColor = '#fee2e2';
      feedback.style.color = '#991b1b';
      feedback.textContent = 'Las contraseñas no coinciden. Por favor verifica.';
      return;
    }

    feedback.className = 'formulario-feedback loading';
    feedback.textContent = 'Creando tu perfil titánico...';

    setTimeout(() => {
      feedback.className = 'formulario-feedback success';
      feedback.textContent = '¡Cuenta creada con éxito! Redirigiendo a tu inicio...';
      setTimeout(() => {
        generarInicio();
      }, 1200);
    }, 800);
  });

  main.appendChild(card);
};

export default formulario;
