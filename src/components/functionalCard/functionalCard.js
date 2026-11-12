import styles from './functionalCard.css' with { type: 'css' };

const template = document.createElement('template');
template.innerHTML = /* html */ `
    <img src="">`;

class FunctionalCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.adoptedStyleSheets = [styles];
  }

  connectedCallback() {
    const html = template.content.cloneNode(true);
    html.querySelector('img').src =
      this.getAttribute('imagen') ?? 'https://via.placeholder.com/30x30';
    this.shadowRoot.appendChild(html);
  }

  static get observedAttributes() {
    return ['imagen'];
  }

  get imagen() {
    return this.getAttribute('imagen');
  }

  set imagen(value) {
    this.setAttribute('imagen', value);
  }

  
  attributeChangedCallback(name, oldValue, newValue) {
    if (name === "imagen" && oldValue !== newValue) {
      const tituloElem = this.shadowRoot.querySelector("img");
      if (tituloElem) tituloElem.src = newValue;
    }
    
  }
}

customElements.define('functional-card', FunctionalCard);
