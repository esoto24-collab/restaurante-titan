
<?php

function conectar(): PDO
{
    static $pdo = null;       // se reutiliza la misma conexión en toda la petición
    if ($pdo !== null) {
        return $pdo;
    }

    $config = require __DIR__ . '/config.php';
    $dsn = "mysql:host={$config['host']};dbname={$config['db']};charset=utf8mb4";

    $pdo = new PDO($dsn, $config['user'], $config['pass'], [
        PDO::ATTR_ERRMODE            => PDO::ERRMODE_EXCEPTION,  // errores como excepciones
        PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,        // filas como arreglos asociativos
        PDO::ATTR_EMULATE_PREPARES   => false,                   // consultas preparadas reales + enteros reales
    ]);

    return $pdo;
}