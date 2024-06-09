<?php
// Memulai atau melanjutkan sesi
session_start();

// Mengimpor file connection.php
include 'connection.php';

// Mendapatkan ID pengguna atau admin dari sesi
$id_user = isset($_SESSION['id_user']) ? $_SESSION['id_user'] : null;
$id_admin = isset($_SESSION['id_admin']) ? $_SESSION['id_admin'] : null;

// Menghapus semua data sesi
session_unset();

// Menghancurkan sesi
session_destroy();

// Menyiapkan respons
$response = [
    "status" => "success",
    "message" => "Logout berhasil"
];

// Memperbarui status login di database jika pengguna adalah user
if ($id_user) {
    $stmt = $conn->prepare("UPDATE user SET login_status_user = 0 WHERE id_user = ?");
    $stmt->bind_param("i", $id_user);
    if (!$stmt->execute()) {
        $response = [
            "status" => "error",
            "message" => "Gagal memperbarui status login user"
        ];
    }
    $stmt->close();
}

// Memperbarui status login di database jika pengguna adalah admin
if ($id_admin) {
    $stmt = $conn->prepare("UPDATE admin SET login_status_admin = 0 WHERE id_admin = ?");
    $stmt->bind_param("i", $id_admin);
    if (!$stmt->execute()) {
        $response = [
            "status" => "error",
            "message" => "Gagal memperbarui status login admin"
        ];
    }
    $stmt->close()
}

// Menutup koneksi
$conn->close();

// Mengirimkan respons dalam bentuk JSON
header('Content-Type: application/json');
echo json_encode($response, JSON_PRETTY_PRINT);
?>