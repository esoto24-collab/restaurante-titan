import styles from './socialCard.css' with { type: 'css' };

const template = document.createElement('template');
template.innerHTML = /* html */ `
    <a href="" target="_blank" >
        <img src="">
    </a>`;

class SocialCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.adoptedStyleSheets = [styles];
  }

  connectedCallback() {
    const html = template.content.cloneNode(true);

    html.querySelector('a').href = this.getAttribute('link') ?? 'https://github.com/esoto24-collab/restaurante-titan';
    html.querySelector('img').src = this.getAttribute('imagen') ?? 'https://via.placeholder.com/30x30';
    this.shadowRoot.appendChild(html);
  }

  static get observedAttributes() {
    return ['link', 'imagen'];
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

customElements.define('social-card', SocialCard);
