import styles from './titanTitulo.css' with { type: 'css' };

const template = document.createElement('template');
template.innerHTML = /* html */ `
   <h2>TITAN</h2>`;

class TitanTitulo extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.adoptedStyleSheets = [styles];
  }

  connectedCallback() {
    const html = template.content.cloneNode(true);
    this.shadowRoot.appendChild(html);
  }

  static get observedAttributes() {
    return [''];
  }


  /*
  attributeChangedCallback(name, oldValue, newValue) {
    
    if (name === "titulo" && oldValue !== newValue) {
      const tituloElem = this.shadowRoot.querySelector("h4");
      if (tituloElem) tituloElem.textContent = newValue;
    }
    
  }
    */
}

customElements.define('titan-titulo', TitanTitulo);
