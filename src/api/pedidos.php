<?php
require __DIR__ . '/helpers.php';

$metodo = $_SERVER['REQUEST_METHOD'];
if ($metodo !== 'GET' && $metodo !== 'POST') {
    responder(['error' => 'Método no permitido'], 405);
}

$archivo = __DIR__ . '/data/pedidos.json';
$contenido = file_exists($archivo) ? file_get_contents($archivo) : '';
$decodificado = json_decode($contenido, true);
$pedidos = is_array($decodificado) ? $decodificado : [];

if ($metodo === 'GET') {
    if (isset($_GET['id'])) {
        $idBuscado = trim($_GET['id']);
        foreach ($pedidos as $pedido) {
            if ((string) $pedido['id'] === $idBuscado) {
                responder($pedido);
            }
        }
        responder(['error' => 'Pedido no encontrado'], 404);
    }
    responder($pedidos);
}

$entrada = json_decode(file_get_contents('php://input'), true);
if (!is_array($entrada)) {
    responder(['error' => 'Cuerpo JSON inválido'], 422);
}

$cliente = trim($entrada['cliente'] ?? '');
$items = $entrada['items'] ?? [];

if ($cliente === '' || mb_strlen($cliente) < 3) {
    responder(['error' => 'El nombre del cliente es obligatorio (mínimo 3 caracteres)'], 422);
} //La alerta esta te indica cuantos caracteres tienes escritos aparte

if (!is_array($items) || count($items) === 0) {
    responder(['error' => 'El pedido debe incluir al menos un platillo'], 422);
}

$productos = require __DIR__ . '/data/catalogo.php';
$total = 0;
$itemsValidados = [];

foreach ($items as $item) {
    $idProd = (int) ($item['id'] ?? 0);
    $cantidad = (int) ($item['cantidad'] ?? 0);

    if ($idProd <= 0 || $cantidad <= 0) {
        responder(['error' => 'Cada platillo debe tener un ID y una cantidad positiva'], 422);
    }

    foreach ($productos as $p) {
        if ($p['id'] === $idProd) {
            $total += $p['precio'] * $cantidad;
            $itemsValidados[] = [
                'id' => $p['id'],
                'nombre' => $p['nombre'],
                'cantidad' => $cantidad,
                'subtotal' => $p['precio'] * $cantidad,
            ];
        }
    }
}

if (count($itemsValidados) === 0) {
    responder(['error' => 'Ninguno de los platillos seleccionados existe en el catálogo'], 422);
}

$pedido = [
    'id' => uniqid('ped_'),
    'cliente' => $cliente,
    'items' => $itemsValidados,
    'total' => $total,
    'creado' => date('c'),
];

$pedidos[] = $pedido;
file_put_contents(
    $archivo,
    json_encode($pedidos, JSON_PRETTY_PRINT | JSON_UNESCAPED_UNICODE),
    LOCK_EX
);

responder($pedido, 201);