<?php
header('Content-Type: application/json');

// Mengimpor file connection.php
include 'connection.php';

// Mendapatkan input dari JSON
$input = json_decode(file_get_contents('php://input'), true);

$username = $input['username'];
$nama_lengkap = $input['nama_lengkap'];
$email = $input['email'];
$password = $input['password'];

// Fungsi untuk melakukan sign up
function signUpUser($conn, $username, $nama_lengkap, $email, $password) {
    // Cek apakah email sudah terdaftar
    $stmt = $conn->prepare("SELECT * FROM user WHERE email_user = ?");
    $stmt->bind_param("s", $email);
    $stmt->execute();
    $stmt->store_result();

    if ($stmt->num_rows > 0) {
        return [
            "status" => "error",
            "message" => "Email sudah terdaftar"
        ];
    }

    // Jika email belum terdaftar, tambahkan user baru
    $stmt = $conn->prepare("INSERT INTO user (username_user, nama_lengkap_user, email_user, password_user) VALUES (?, ?, ?, ?)");
    $stmt->bind_param("ssss", $username, $nama_lengkap, $email, $password);

    if ($stmt->execute()) {
        return [
            "status" => "success",
            "message" => "Sign up berhasil"
        ];
    } else {
        return [
            "status" => "error",
            "message" => "Gagal menambahkan user"
        ];
    }
}

// Memanggil fungsi sign up user
$response = signUpUser($conn, $username, $nama_lengkap, $email, $password);

// Menutup koneksi
$conn->close();

// Mengirimkan respon dalam bentuk JSON
echo json_encode($response, JSON_PRETTY_PRINT);
?>
