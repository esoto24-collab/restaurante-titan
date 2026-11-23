import styles from './opcionMenu.css' with { type: 'css' };

const template = document.createElement('template');
template.innerHTML = /* html */ `
    <img src="/src/assets/svg/log-in.svg" />
    <p>Iniciar Sesion</p>
    `;

class OpcionMenu extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.adoptedStyleSheets = [styles];
  }

  connectedCallback() {
    const html = template.content.cloneNode(true);
    html.querySelector('p').textContent = this.getAttribute('texto') ?? 'Opcion Menu';
    html.querySelector('img').src =
      this.getAttribute('imagen') ?? 'https://via.placeholder.com/20x20';
    this.shadowRoot.appendChild(html);
  }

  static get observedAttributes() {
    return ['texto', 'imagen'];
  }

  set texto(value) {
    this.setAttribute('texto', value);
  }

  set imagen(value) {
    this.setAttribute('imagen', value);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;

    const img = this.shadowRoot.querySelector('img');
    const p = this.shadowRoot.querySelector('p');

    if (!img || !p) return;

    switch (name) {
      case 'texto':
        p.textContent = newValue ?? 'Campo';
        break;
      case 'imagen':
        img.src = newValue ?? 'text';
        break;
    }
  }
}

customElements.define('opcion-menu', OpcionMenu);
