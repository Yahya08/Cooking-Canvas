<?php
header('Content-Type: application/json');

// Mengimpor file connection.php
include 'connection.php';

// Memulai sesi
session_start();

// Mendapatkan input dari JSON
$input = json_decode(file_get_contents('php://input'), true);

// Mengecek apakah input adalah email atau username
$identifier = $input['identifier']; // Input dari pengguna
$password = $input['password'];

// Fungsi untuk melakukan autentikasi
function authenticate($conn, $identifier, $password) {
    // Mencocokkan dengan tabel admin menggunakan email atau username
    $stmt = $conn->prepare("SELECT id_admin, nama_lengkap_admin FROM admin WHERE (email_admin = ? OR username_admin = ?) AND password_admin = ?");
    $stmt->bind_param("sss", $identifier, $identifier, $password);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($id_admin, $nama_lengkap_admin);
        $stmt->fetch();
        
        // Menyimpan data admin ke sesi
        $_SESSION['id_admin'] = $id_admin;
        $_SESSION['nama_lengkap_admin'] = $nama_lengkap_admin;
        $_SESSION['role'] = 'admin';
        
        // Memperbarui status login admin
        $update_stmt = $conn->prepare("UPDATE admin SET login_status_admin = 1 WHERE id_admin = ?");
        $update_stmt->bind_param("i", $id_admin);
        $update_stmt->execute();
        $update_stmt->close();
        
        return [
            "status" => "success",
            "message" => "Login berhasil",
            "role" => "admin",
            "id_admin" => $id_admin,
            "nama_lengkap_admin" => $nama_lengkap_admin
        ];
    }
    $stmt->close();

    // Mencocokkan dengan tabel user menggunakan email atau username
    $stmt = $conn->prepare("SELECT id_user, nama_lengkap_user FROM user WHERE (email_user = ? OR username_user = ?) AND password_user = ?");
    $stmt->bind_param("sss", $identifier, $identifier, $password);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        $stmt->bind_result($id_user, $nama_lengkap_user);
        $stmt->fetch();
        
        // Menyimpan data user ke sesi
        $_SESSION['id_user'] = $id_user;
        $_SESSION['nama_lengkap_user'] = $nama_lengkap_user;
        $_SESSION['role'] = 'user';
        
        // Memperbarui status login user
        $update_stmt = $conn->prepare("UPDATE user SET login_status_user = 1 WHERE id_user = ?");
        $update_stmt->bind_param("i", $id_user);
        $update_stmt->execute();
        $update_stmt->close();
        
        return [
            "status" => "success",
            "message" => "Login berhasil",
            "role" => "user",
            "id_user" => $id_user,
            "nama_lengkap_user" => $nama_lengkap_user
        ];
    }
    $stmt->close();

    return [
        "status" => "error",
        "message" => "Email, username, atau password salah"
    ];
}

// Autentikasi pengguna
$response = authenticate($conn, $identifier, $password);

// Menutup koneksi
$conn->close();

// Mengirimkan respon dalam bentuk JSON
echo json_encode($response, JSON_PRETTY_PRINT);
?>