import '../components/ticketCard/ticketCard.js';

const tickets = [
  {
    identificador: '1',
    fecha: '20/10/21',
    articulos: 5,
    estado: 'Completado',
    total: 200,
  },
  {
    identificador: '2',
    fecha: '22/01/22',
    articulos: 1,
    estado: 'En camino',
    total: 85,
  },
  {
    identificador: '3',
    fecha: '15/05/22',
    articulos: 3,
    estado: 'Preparando',
    total: 145,
  },
  {
    identificador: '4',
    fecha: '02/12/26',
    articulos: 4,
    estado: 'Completado',
    total: 310,
  },
  {
    identificador: '5',
    fecha: '10/10/10',
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
    ticketCard.identificador = ticket.identificador;
    contenedor.appendChild(ticketCard);
  });
  return contenedor;
}
