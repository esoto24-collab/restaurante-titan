import '../components/categoriaCard/categoriaCard.js';

const categorias = [
  {
    nombre: "Pizza",
    descripcion: "Masa artesanal horneada al momento con queso derretido e ingredientes frescos.",
    disponibles: 2,
    imagen: "/src/assets/img/categoriaPizza.jpg"
  },
  {
    nombre: "Hamburguesa",
    descripcion: "Carne jugosa a la parrilla en pan brioche con queso fundido y aderezos de la casa.",
    disponibles: 5,
     imagen: "/src/assets/img/categoriaHamburguesa.jpg"
  },
  {
    nombre: "Sushi",
    descripcion: "Rollos frescos, empanizados y especiales preparados al instante con ingredientes selectos.",
    disponibles: 8,
     imagen: "/src/assets/img/categoriaSushi.jpg"
  },
  {
    nombre: "Papas",
    descripcion: "Crujientes papas a la francesa, gajo y especiales bañadas en queso y toppings.",
    disponibles: 4,
     imagen: "/src/assets/img/categoriaPapas.jpg"
  },
  {
    nombre: "Boneless",
    descripcion: "Trozos de pechuga de pollo empanizados y bañados en tu salsa favorita.",
    disponibles: 6,
     imagen: "/src/assets/img/categoriaBoneless.jpg"
  },
  {
    nombre: "Alitas",
    descripcion: "Alitas crujientes y jugosas glaseadas en salsas clásicas, dulces o extra picantes.",
    disponibles: 6,
     imagen: "/src/assets/img/categoriaPizza.jpg"
  }
];

export function generarCategorias() {
  const contenedor = document.createElement('div');
  contenedor.classList.add("categorias")
  categorias.forEach((categoria) => {
    const categoriaCard = document.createElement('categoria-card');
    categoriaCard.nombre = categoria["nombre"];
    categoriaCard.descripcion = categoria["descripcion"];
    categoriaCard.disponibles = categoria["disponibles"]
    categoriaCard.imagen = categoria["imagen"]
    contenedor.appendChild(categoriaCard);
  });
  return contenedor
}