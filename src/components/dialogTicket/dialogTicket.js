import styles from './dialogTicket.css' with { type: 'css' };
import json from '../../data/detallesTickets.json' with { type: 'json' };
const template = document.createElement('template');
template.innerHTML = /* html */ `
    <dialog>
        <functional-card
            imagen="/src/assets/svg/error.svg"
            id="cerrar"
        ></functional-card>
        <h2>Detalles de compra</h2>
        <p>Orden #<span id="pedido"></span> para <span>Jesus Ivan</span></p>
        <p id="fecha"></p>
        <p id="estado"></p>
        <table>
          <thead>
            <tr>
              <th>Producto</th>
              <th>Cantidad</th>
              <th>Precio</th>
            </tr>
          </thead>
          <tbody>
          </tbody>
        </table>
        <div class="ticket__dinero">
          <p>Total</p>
          <p id="total">$0</p>
        </div>
         <div class="ticket__footer">
          <h3>Gracias por vivir</h3>
          <div class="barcode-fake" aria-label="Código de barras"></div>
        </div>
    </dialog>`;

class DialogTicket extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.adoptedStyleSheets = [styles];
  }

  connectedCallback() {
    const html = template.content.cloneNode(true);
    this.shadowRoot.appendChild(html);
    this.dialog = this.shadowRoot.querySelector('dialog');
    this.enlazarEventos();
  }

  enlazarEventos() {
    const cerrar = this.shadowRoot.querySelector('#cerrar');

    cerrar.addEventListener('click', () => {
      this.close();
    });
  }

  open() {
    this.dialog?.showModal();
  }

  close() {
    this.dialog?.close();
  }

  static get observedAttributes() {
    return ['total', 'fecha', 'estado', 'idpedido'];
  }

  set total(value) {
    this.setAttribute('total', value);
  }

  set fecha(value) {
    this.setAttribute('fecha', value);
  }

  set estado(value) {
    this.setAttribute('estado', value);
  }

  set idPedido(value) {
    this.setAttribute('idpedido', value);
  }

  renderizarProductos() {
    const tbody = this.shadowRoot.querySelector('tbody');
    if (!tbody) return;

    const idPedidoActual = String(this.getAttribute('idpedido') ?? '');
    const lista = Array.isArray(json) ? json : (json.detalleTickets ?? []);

    const coincidencias = lista.filter((item) => String(item.ticketId) === idPedidoActual);

    tbody.innerHTML = '';

    if (coincidencias.length === 0) {
      const filaVacia = document.createElement('tr');
      const celda = document.createElement('td');
      celda.colSpan = 3;
      celda.textContent = 'Sin productos registrados para este pedido';
      filaVacia.appendChild(celda);
      tbody.appendChild(filaVacia);
      return;
    }

    const fragment = document.createDocumentFragment();

    for (const item of coincidencias) {
      const fila = document.createElement('tr');

      const tdProducto = document.createElement('td');
      tdProducto.textContent = item.nombre;

      const tdCantidad = document.createElement('td');
      tdCantidad.textContent = item.cantidad;

      const tdPrecio = document.createElement('td');
      tdPrecio.textContent = `$${item.total}`;

      fila.append(tdProducto, tdCantidad, tdPrecio);
      fragment.appendChild(fila);
    }

    tbody.appendChild(fragment);
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) return;

    const total = this.shadowRoot.querySelector('#total');
    const fecha = this.shadowRoot.querySelector('#fecha');
    const estado = this.shadowRoot.querySelector('#estado');
    const pedido = this.shadowRoot.querySelector('#pedido');
    switch (name) {
      case 'total':
        total.textContent = '$' + (newValue ?? '0');
        break;
      case 'fecha':
        fecha.textContent = newValue ?? 'Lunes, Enero 01, 2000';
        break;
      case 'estado':
        estado.textContent = 'Estado: ' + (newValue ?? 'Pendiente');
        break;
      case 'idpedido':
        pedido.textContent = newValue ?? "0";
        this.renderizarProductos();
        break;
    }
  }
}

customElements.define('dialog-ticket', DialogTicket);
