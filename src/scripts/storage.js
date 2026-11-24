const CARRITO_KEY = 'titan_carrito';
const TEMA_KEY = 'titan_tema';

// --- CRRItO ---
export function obtenerCarrito() {
  try {
    const datos = localStorage.getItem(CARRITO_KEY);
    return datos ? JSON.parse(datos) : [];
  } catch (error) {
    console.error('Error al leer carrito de localStorage:', error);
    return [];
  }
}

export function guardarCarrito(carrito) {
  localStorage.setItem(CARRITO_KEY, JSON.stringify(carrito));
}

export function obtenerTemaOscuro() {
  try {
    const datos = localStorage.getItem(TEMA_KEY);
    const config = datos ? JSON.parse(datos) : { dark: false };
    return Boolean(config.dark);
  } catch {
    return false;
  }
}

export function guardarTemaOscuro(esOscuro) {
  localStorage.setItem(TEMA_KEY, JSON.stringify({ dark: esOscuro }));
}

export function guardarConTTL(clave, datos, ttlMs) {
  const registro = {
    datos,
    expira: Date.now() + ttlMs,
  };
  localStorage.setItem(clave, JSON.stringify(registro));
}

export function leerConTTL(clave) {
  try {
    const raw = localStorage.getItem(clave);
    if (!raw) return null;
    const registro = JSON.parse(raw);
    if (Date.now() > registro.expira) {
      localStorage.removeItem(clave);
      return null;
    }
    return registro.datos;
  } catch {
    return null;
  }
}