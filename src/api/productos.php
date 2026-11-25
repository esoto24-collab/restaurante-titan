<?php
require __DIR__ . '/helpers.php';
require __DIR__ . '/db.php';

function validarProducto(array $d): array
{
    $nombre = trim($d['nombre'] ?? '');
    $precio = $d['precio'] ?? null;
    $categoria = trim($d['categoria'] ?? '');
    $calorias = trim($d['calorias'] ?? '');
    $descripcion = trim($d['descripcion'] ?? '');

    if (mb_strlen($nombre) < 3 || mb_strlen($nombre) > 80 || !is_numeric($precio) || $precio < 1 || $precio > 5000 || $categoria === '' || $calorias === '' || $descripcion === '') {
        responder(['error' => 'Datos invalidos'], 422);
    }

    return [$nombre, (float) $precio, $categoria, $calorias, $descripcion];
}

try {
    $pdo = conectar();
    $method = $_SERVER['REQUEST_METHOD'];
    $id = isset($_GET['id']) ? (int) $_GET['id'] : null;

    switch ($method) {
        case 'GET':
            if (isset($_GET['id'])) {
                $stmt = $pdo->prepare('SELECT id, nombre, precio, categoria, calorias, descripcion FROM productos WHERE id = :id');
                $stmt->execute(['id' => $id]);
                $producto = $stmt->fetch();

                if (!$producto) {
                    responder(['error' => 'No se encontro el producto'], 404);
                }
                responder(formatearProducto($producto));
            }

            $buscar = trim($_GET['buscar'] ?? '');
            $stmt = $pdo->prepare('SELECT id, nombre, precio, categoria, calorias, descripcion FROM productos WHERE nombre LIKE :buscar ORDER BY id');
            $stmt->execute(['buscar' => "%$buscar%"]);

            responder(array_map('formatearProducto', $stmt->fetchAll()));
            break;

        case 'POST':
            [$nombre, $precio, $categoria, $calorias, $descripcion] = validarProducto(leerJson());

            $stmt = $pdo->prepare('INSERT INTO productos (nombre, precio, categoria, calorias, descripcion) VALUES (:nombre, :precio, :categoria, :calorias, :descripcion)');
            $stmt->execute([
                'nombre' => $nombre,
                'precio' => $precio,
                'categoria' => $categoria,
                'calorias' => $calorias,
                'descripcion' => $descripcion,
            ]);

            responder([
                'id' => (int) $pdo->lastInsertId(),
                'nombre' => $nombre,
                'precio' => $precio,
                'categoria' => $categoria,
                'calorias' => $calorias,
                'descripcion' => $descripcion,
            ], 201);
            break;

        case 'PUT':
            if ($id === null) {
                responder(['error' => 'Falta el id'], 400);
            }
            [$nombre, $precio, $categoria, $calorias, $descripcion] = validarProducto(leerJson());

            $existe = $pdo->prepare('SELECT id FROM productos WHERE id = :id');
            $existe->execute(['id' => $id]);
            if (!$existe->fetch()) {
                responder(['error' => 'No se encontró el producto'], 404);
            }

            $stmt = $pdo->prepare('UPDATE productos SET nombre = :nombre, precio = :precio, categoria = :categoria, calorias = :calorias, descripcion = :descripcion WHERE id = :id');
            $stmt->execute([
                'nombre' => $nombre,
                'precio' => $precio,
                'categoria' => $categoria,
                'calorias' => $calorias,
                'descripcion' => $descripcion,
                'id' => $id,
            ]);

            responder([
                'id' => $id,
                'nombre' => $nombre,
                'precio' => $precio,
                'categoria' => $categoria,
                'calorias' => $calorias,
                'descripcion' => $descripcion,
            ]);
            break;

        case 'DELETE':
            if ($id === null) {
                responder(['error' => 'Falta el id'], 400);
            }

            try {
                $stmt = $pdo->prepare('DELETE FROM productos WHERE id = :id');
                $stmt->execute(['id' => $id]);
            } catch (PDOException $e) {
                if ($e->getCode() === '23000') {
                    responder(['error' => 'El producto ya esta en pedidos y no se puede eliminar'], 409);
                }
                throw $e;
            }

            if ($stmt->rowCount() === 0) {
                responder(['error' => 'No se encontro el producto'], 404);
            }
            http_response_code(204);
            exit;

        default:
            responder(['error' => 'Metodo no permitido'], 405);
    }
} catch (PDOException $ex) {
    responder(['error' => 'Ocurrio un error'], 500);
}