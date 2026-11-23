import styles from './comidaCard.css' with { type: 'css' };

const template = document.createElement('template');
template.innerHTML = /* html */ `
    <img
        class="comida__imagen"
        src="https://via.placeholder.com/100"
    />
    <div class="comida__informacion">
        <h3>Comida</h3>
        <p>Informacion de la comida en cuestion como lo puedes ser sus ingredientes</p>
        <hr>
        <div>
            <strong>$120 MXN</strong>
            <button>Añadir </button>
        </div>
    </div>
    `;

class ComidaCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.adoptedStyleSheets = [styles];
  }

  connectedCallback() {
    const html = template.content.cloneNode(true);
    html.querySelector("h3").textContent = this.getAttribute("nombre") ?? "Comida"
    html.querySelector("p").textContent = this.getAttribute("descripcion") ?? "descripcion"
    html.querySelector("strong").textContent = "$"+(this.getAttribute("precio") ?? "0")+ " MXN" 
    html.querySelector("img").src = this.getAttribute("imagen")
    this.shadowRoot.appendChild(html);
  }


  static get observedAttributes() {
    return ['nombre', 'descripcion', 'precio', 'imagen'];
  }


  set nombre(value) {
    this.setAttribute('nombre', value);
  }

  set descripcion(value) {
    this.setAttribute('descripcion', value);
  }

  set precio(value) {
    this.setAttribute('precio',value);
  }

  set imagen(value){
    this.setAttribute('imagen',value);
  }
}

customElements.define('comida-card', ComidaCard);
