import styles from './formCampo.css' with { type: 'css' };

const template = document.createElement('template');
template.innerHTML = /* html */ `
    <label for="campo">Campo</label>
    <input 
      type="text" 
      id="campo"
      name="campo" 
      required 
      placeholder="Ejemplo"
      data-error-para="error-campo-msg"  
    />
    <span>Error Mensaje</span>`;

class FormCampo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.adoptedStyleSheets = [styles];
  }

  connectedCallback() {
    const html = template.content.cloneNode(true);

    const label = html.querySelector('label');
    label.textContent = this.getAttribute('nombre') ?? 'Campo';
    label.for = this.getAttribute('identificador') ?? 'campo';

    const input = html.querySelector('input');
    input.type = this.getAttribute('tipo') ?? 'text';
    input.id = this.getAttribute('identificador') ?? 'campo';
    input.name = this.getAttribute('identificador') ?? 'campo';
    input.placeholder = this.getAttribute('ejemplo') ?? 'campo';
    input.dataset.errorPara = this.getAttribute('error') ?? 'error-campo-msg';
    input.minLength = this.getAttribute('minimo') ?? 0;
    input.maxLength = this.getAttribute('maximo') ?? 999;

    const span = html.querySelector('span');
    span.id = this.getAttribute('error') ?? 'error-campo-msg';

    this.shadowRoot.appendChild(html);

    const renderedInput = this.shadowRoot.querySelector('input');
    const renderedSpan = this.shadowRoot.querySelector('span');

   renderedInput.addEventListener('input', () => {
      if (renderedInput.validity.valid) {
        renderedSpan.textContent = '';
        renderedSpan.style.display = 'none';
      } else {
        renderedSpan.textContent = this.obtenerMensajeError(renderedInput);
        renderedSpan.style.display = 'block';
      }
    });
  }

  obtenerMensajeError(input) {
    if (input.validity.valueMissing) {
      return 'Este campo es obligatorio.';
    }
    if (input.validity.typeMismatch) {
      return 'El formato introducido no es válido.';
    }
    if (input.validity.tooShort) {
      return `Debe tener al menos ${input.minLength} caracteres.`;
    }
    if (input.validity.tooLong) {
      return `Debe tener como máximo ${input.maxLength} caracteres.`;
    }
    if (input.validity.patternMismatch) {
      return 'El formato no coincide con el requerido.';
    }

    return input.validationMessage;
  }

  static get observedAttributes() {
    return ['identificador', 'nombre', 'nombre', 'tipo', 'ejemplo', 'error', 'minimo', 'maximo'];
  }

  get identificador() {
    return this.getAttribute('identificador');
  }

  set identificador(value) {
    this.setAttribute('identificador', value);
  }

  get nombre() {
    return this.getAttribute('nombre');
  }

  set nombre(value) {
    this.setAttribute('nombre', value);
  }

  get tipo() {
    return this.getAttribute('tipo');
  }

  set tipo(value) {
    this.setAttribute('tipo', value);
  }

  get ejemplo() {
    return this.getAttribute('ejemplo');
  }

  set ejemplo(value) {
    this.setAttribute('ejemplo', value);
  }

  get error() {
    return this.getAttribute('error');
  }

  set error(value) {
    this.setAttribute('error', value);
  }

  get minimo() {
    return this.getAttribute('minimo');
  }

  set minimo(value) {
    this.setAttribute('minimo',value);
  }

  get maximo() {
    return this.getAttribute('maximo');
  }

  set maximo(value) {
    this.setAttribute('maximo',value);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;

    const label = this.shadowRoot.querySelector('label');
    const input = this.shadowRoot.querySelector('input');
    const span = this.shadowRoot.querySelector('span');

    if (!label || !input) return;

    switch (name) {
      case 'nombre':
        label.textContent = newValue ?? 'Campo';
        break;
      case 'identificador':
        label.setAttribute('for', newValue);
        input.id = newValue;
        input.name = newValue;
        break;
      case 'tipo':
        input.type = newValue ?? 'text';
        break;
      case 'ejemplo':
        input.placeholder = newValue ?? '';
        break;
      case 'error':
        input.dataset.errorPara = newValue;
        if (span) span.id = newValue;
        break;
      case 'minimo':
        input.minLength = Number(newValue) || 0;
        break;
      case 'maximo':
        input.maxLength = Number(newValue) || 99;
        break;
    }
  }
}

customElements.define('form-campo', FormCampo);
