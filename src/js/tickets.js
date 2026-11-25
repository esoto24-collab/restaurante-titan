import '../components/ticketCard/ticketCard.js';

const tickets = [
  {
    fecha: '24/11/26',
    articulos: 5,
    estado: 'Completado',
    total: 200,
  },
  {
    fecha: '24/11/26',
    articulos: 1,
    estado: 'En camino',
    total: 85,
  },
  {
    fecha: '23/11/26',
    articulos: 3,
    estado: 'Preparando',
    total: 145,
  },
  {
    fecha: '22/11/26',
    articulos: 4,
    estado: 'Completado',
    total: 310,
  },
  {
    fecha: '20/11/26',
    articulos: 2,
    estado: 'Cancelado',
    total: 90,
  },
];

export function generarTickets() {
  const contenedor = document.createElement('div');
  contenedor.classList.add('pedidos__tickets');

  tickets.forEach((ticket) => {
    const ticketCard = document.createElement('ticket-card');
    ticketCard.fecha = ticket.fecha;
    ticketCard.articulos = ticket.articulos;
    ticketCard.estado = ticket.estado;
    ticketCard.total = ticket.total;

    contenedor.appendChild(ticketCard);
  });
  return contenedor;
}

