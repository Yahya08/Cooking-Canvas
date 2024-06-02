<?php
header("Content-Type: application/json");

// Method yang digunakan GET
// Menyambungkan koneksi ke Database menggunakan file connection.php
include 'connection.php'; // Pastikan file ini ada dan koneksi berhasil

// Menggunakan prepared statement untuk keamanan
$stmt = $conn->prepare("SELECT * FROM komentar");
$stmt->execute();
$result = $stmt->get_result();

if ($result === false) {
    // Mengembalikan error sebagai JSON jika query gagal
    echo json_encode(["error" => $conn->error], JSON_PRETTY_PRINT);
    exit;
}

$data_komentar = [];

if ($result->num_rows > 0) {
    // Mengambil data dan menyimpannya dalam array $data_komentar
    while ($row = $result->fetch_assoc()) {
        $data_komentar[] = [
            'id_komentar' => isset($row["id_komentar"]) ? $row["id_komentar"] : null,
            'id_user' => isset($row["id_user"]) ? $row["id_user"] : null,
            'text_komentar' => isset($row["text_komentar"]) ? $row["text_komentar"] : null
        ];
    }
} else {
    // Jika tidak ada hasil, berikan pesan yang sesuai
    echo json_encode(["message" => "Tidak ada komentar"], JSON_PRETTY_PRINT);
    exit;
}

// Menutup statement dan koneksi
$stmt->close();
$conn->close();

// Mengeluarkan data sebagai JSON dengan format yang rapi
echo json_encode($data_komentar, JSON_PRETTY_PRINT);
?>