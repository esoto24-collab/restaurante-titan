import { numeroUsuarios} from "./gestorUsuarios.js";

const body = document.body;

const botones = ['Pedido', 'Cliente', 'Platillo'];
const datos = [
  {
    titulo: 'GANANCIAS',
    numero: 20,
  },
  {
    titulo: 'PEDIDOS',
    numero: 284,
  },
  {
    titulo: 'PLATILLOS',
    numero: 36,
  },
  {
    titulo: 'CLIENTES',
    numero: 20,
  },
];

const opciones_barra = ['Analisis', 'Pedidos', 'Menu','Clientes','Salir'];

export function generarDashboard() {
  body.innerHTML = '';
  body.classList =""
  body.classList.add('dashboard');
  const barra_lateral = document.createElement('div');
  barra_lateral.classList.add('dashboard_barra_lateral');
  barra_lateral.classList.add('barra-lateral');
  barra_lateral.classList.add('alternativo');

const lista = document.createElement('ul');
  for(let i = 0; i < opciones_barra.length; i++){
    const opcion = document.createElement('li');
    opcion.textContent= opciones_barra[i]
    lista.appendChild(opcion)
  }

  const main = document.createElement('main');
  main.classList.add('contenido_dashboard')

  const titulotePagina = document.createElement("h1");
  titulotePagina.textContent="TITAN"
  barra_lateral.appendChild(titulotePagina)
  barra_lateral.appendChild(lista)
  body.appendChild(barra_lateral);

  const contenido_superior = document.createElement('div');
  const titulo = document.createElement('h2');
  titulo.textContent = 'Analisis';
  contenido_superior.appendChild(titulo);

  const botonesContenedor = document.createElement("div");
  for (let i = 0; i < botones.length; i++) {
    const boton = document.createElement('button');
    boton.textContent = 'Añadir  ' + botones[i];
    botonesContenedor.appendChild(boton);
  }

  contenido_superior.appendChild(botonesContenedor)

  const tarjetas = document.createElement('div');

  for (let i = 0; i < datos.length; i++) {
    const t = document.createElement('div');
    const tituloTarjeta = document.createElement('h6');
    const contenidoTarjeta = document.createElement('h3');
    tituloTarjeta.textContent = datos[i].titulo
    contenidoTarjeta.textContent = datos[i].numero
    if(i == 3){
      contenidoTarjeta.textContent = numeroUsuarios();
    }
    t.appendChild(tituloTarjeta)
    t.appendChild(contenidoTarjeta)
    tarjetas.appendChild(t);

  }

  contenido_superior.classList.add("superior")
  tarjetas.classList.add("datos_tarjetas")
  main.appendChild(contenido_superior);
  main.appendChild(tarjetas);
  body.appendChild(main);
}
