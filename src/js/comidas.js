import '../components/comidaCard/comidaCard.js';

const comidas = [
  {
    nombre: 'Hamburguesa Titán',
    precio: 185.0,
    tipo: 'Hamburguesa',
    descripcion:
      'Doble carne de res de 180g, queso cheddar fundido, tocino crujiente y cebolla caramelizada en pan brioche artesanal.',
  },
  {
    nombre: 'Hamburguesa Titán Familiar',
    precio: 420.0,
    tipo: 'Hamburguesa',
    descripcion:
      'Hamburguesa gigantesca de medio kilo de carne de res, cuádruple queso, tocino extra, pepinillos, aros de cebolla y bañado con queso cheddar fundido para compartir.',
  },
  {
    nombre: 'Hamburguesa Dios Gorilla',
    precio: 210.0,
    tipo: 'Hamburguesa',
    descripcion:
      'Una mole de hamburguesa con triple carne estilo smash, mucho queso americano, aros de cebolla empanizados y salsa BBQ ahumada.',
  },
];

export function generarComidas() {
  const contenedor = document.createElement('div');
  contenedor.classList.add('comidas');
  comidas.forEach((comida) => {
    const comidaCard = document.createElement('comida-card');
    comidaCard.nombre = comida["nombre"]
    comidaCard.descripcion = comida["descripcion"]
    comidaCard.precio = comida["precio"]
    comidaCard.imagen = '/src/assets/img/categoriaPizza.jpg'
    contenedor.appendChild(comidaCard);
  });
  return contenedor;
}
