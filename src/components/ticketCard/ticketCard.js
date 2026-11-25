import styles from './ticketCard.css' with { type: 'css' };

const template = document.createElement('template');
template.innerHTML = /* html */ `
    <div class="ticket__estado">
        <strong id="ticket_fecha">24/11/26</strong>
        <p id="ticket_estado">Completado</p>
    </div>
    <hr>
    <div class="ticket__dinero">
        <span id="ticket_articulos">5 articulos</span>
        <strong id="ticket_total">$200 MXN</strong>
    </div>`;

class TicketCard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.adoptedStyleSheets = [styles];
  }

  connectedCallback() {
    const html = template.content.cloneNode(true);
    html.querySelector('#ticket_fecha').textContent = this.fecha ?? '00/00/00';
    html.querySelector('#ticket_estado').textContent = this.estado ?? 'Pendiente';
    html.querySelector('#ticket_articulos').textContent = (this.articulos ?? '0') + ' Articulos';
    html.querySelector('#ticket_total').textContent = '$' + (this.total ?? '0') + ' MXN';
    this.shadowRoot.appendChild(html);
    this.enlazarEventos();
  }

  enlazarEventos() {
    this.addEventListener("click",()=>{
     
    })
  }

  static get observedAttributes() {
    return ['fecha', 'articulos', 'estado', 'total'];
  }

  get fecha() {
    return this.getAttribute('fecha');
  }

  set fecha(valor) {
    this.setAttribute('fecha', valor);
  }

  get articulos() {
    return this.getAttribute('articulos');
  }

  set articulos(valor) {
    this.setAttribute('articulos', valor);
  }

  get estado() {
    return this.getAttribute('estado');
  }

  set estado(valor) {
    this.setAttribute('estado', valor);
  }

  get total() {
    return this.getAttribute('total');
  }

  set total(valor) {
    this.setAttribute('total', valor);
  }
}

customElements.define('ticket-card', TicketCard);
