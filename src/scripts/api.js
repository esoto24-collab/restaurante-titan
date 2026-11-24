import { guardarConTTL, leerConTTL } from "./storage.js";

const URL_PRODUCTOS = "./src/api/productos.php";
const URL_PEDIDOS = "./src/api/pedidos.php";
const TTL_PRODUCTOS = 5 * 60 * 1000;

export async function obtenerProductos() {
  const cacheKey = `cache:${URL_PRODUCTOS}`;
  const productosEnCache = leerConTTL(cacheKey);

  if (productosEnCache !== null) {
    return productosEnCache;
  }

  const respuesta = await fetch(URL_PRODUCTOS);
  if (!respuesta.ok) {
    throw new Error(`Error HTTP ${respuesta.status}: no fue posible cargar los productos.`);
  }

  const productos = await respuesta.json();
  if (!Array.isArray(productos)) {
    throw new TypeError("La respuesta de productos debe ser un arreglo JSON.");
  }

  guardarConTTL(cacheKey, productos, TTL_PRODUCTOS);
  return productos;
}

export async function obtenerPedidos() {
  const respuesta = await fetch(URL_PEDIDOS);
  const datos = await respuesta.json();
  if (!respuesta.ok) {
    throw new Error(datos.error ?? `Error HTTP ${respuesta.status} al cargar pedidos.`);
  }
  return datos;
}

export async function crearPedido(pedido) {
  const respuesta = await fetch(URL_PEDIDOS, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(pedido),
  });
  const datos = await respuesta.json();
  if (!respuesta.ok) {
    throw new Error(datos.error ?? "No se pudo crear el pedido.");
  }
  return datos;
}