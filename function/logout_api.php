<?php
// Memulai atau melanjutkan sesi
session_start();

// Menghapus semua data sesi
session_unset();

// Menghancurkan sesi
session_destroy();

// Menyiapkan respons
$response = [
    "status" => "success",
    "message" => "Logout berhasil"
];

// Mengirimkan respons dalam bentuk JSON
header('Content-Type: application/json');
echo json_encode($response, JSON_PRETTY_PRINT);
?>