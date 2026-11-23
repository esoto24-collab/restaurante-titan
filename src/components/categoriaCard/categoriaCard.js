import styles from './categoriaCard.css' with { type: 'css' };

const template = document.createElement('template');
template.innerHTML = /* html */ `
    <img src="https://via.placeholder.com/200x80" />
        <div>
          <h4>Categoria</h4>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          <span>22 disponibles</span>
        </div>`;

class CategoriaCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.adoptedStyleSheets = [styles];
  }

  connectedCallback() {
    const html = template.content.cloneNode(true);
    html.querySelector("h4").textContent = this.getAttribute('nombre') ?? "Categoria"; 
    html.querySelector("p").textContent = this.getAttribute('descripcion') ?? "descripcion muy buena y intersante, wow increible"; 
    html.querySelector("span").textContent = (this.getAttribute('disponibles') ?? "0") + " disponibles"
    html.querySelector("img").src = this.getAttribute('imagen') ?? "https://via.placeholder.com/200x80"
    this.shadowRoot.appendChild(html);
  }

  static get observedAttributes() {
    return [''];
  }

  set nombre(value) {
     this.setAttribute('nombre',value);
  }

  set descripcion(value){
    this.setAttribute('descripcion',value);
  }

  set disponibles(value){
    this.setAttribute('disponibles',value);
  }

  set imagen(value){
    this.setAttribute('imagen',value);
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

customElements.define('categoria-card', CategoriaCard);
