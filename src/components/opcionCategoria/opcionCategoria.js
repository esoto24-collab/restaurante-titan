import styles from './opcionCategoria.css' with { type: 'css' };

const template = document.createElement('template');
template.innerHTML = /* html */ `
    `;

class OpcionCategoria extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.adoptedStyleSheets = [styles];
  }

  connectedCallback() {
    const html = template.content.cloneNode(true);
    html.textContent = this.getAttribute("texto") ?? "Categoria"
    this.addEventListener("click",()=>{
      this.classList.toggle("activa")
    })
    this.shadowRoot.appendChild(html);
  }

  static get observedAttributes() {
    return ['texto'];
  }

}

customElements.define('opcion-categoria', OpcionCategoria);
