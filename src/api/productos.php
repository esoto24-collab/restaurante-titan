<?php
require __DIR__ . '/helpers.php';
$productos = require __DIR__ . '/data/catalogo.php';

if ($_SERVER['REQUEST_METHOD'] !== 'GET') {
    responder(['error' => 'Método no permitido'], 405);
}

if (isset($_GET['id'])) {
    $id = (int) $_GET['id'];
    foreach ($productos as $p) {
        if ($p['id'] === $id) {
            responder($p);
        }
    }
    responder(['error' => 'Producto no encontrado'], 404);
}

$buscar = trim($_GET['buscar'] ?? '');
if ($buscar !== '') {
    $productos = array_values(array_filter(
        $productos,
        fn($p) => stripos($p['nombre'], $buscar) !== false
    ));
}

responder($productos);