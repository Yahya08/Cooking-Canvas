<?php
header("Content-Type: application/json");

// Menyambungkan koneksi ke Database menggunakan file connection.php
include 'connection.php'; 

$request_method = $_SERVER['REQUEST_METHOD'];
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$path_parts = explode('/', trim($path, '/'));

// Assuming the script is located at /backend/function/dashboardadminpage_api.php
$script_index = array_search('dashboardadminpage_api.php', $path_parts);
$action = isset($path_parts[$script_index + 1]) ? $path_parts[$script_index + 1] : '';

// Tentukan tindakan berdasarkan URL path dan metode HTTP
switch ($request_method) {
    case 'POST':
        switch ($action) {
    case 'tambah-resep':
        postTambahResep($conn);
        break;
    default:
        http_response_code(404);
        echo json_encode(["error" => "Link tidak ditemukan"], JSON_PRETTY_PRINT);
        break;
}
        break;
    default:
        http_response_code(405);
        echo json_encode(["error" => "Metode tidak diizinkan"], JSON_PRETTY_PRINT);
        break;
}

$conn->close();

// TAMBAH RESEP (POST)
// Menerima Input Form
function postTambahResep($conn) {
    // Memvalidasi field POST yang wajib diisi
    $required_fields = ['judul_resep', 'waktu_memasak', 'porsi_masakan', 'kesulitan_memasak', 'deskripsi_resep', 'alat', 'bahan', 'cara'];
    foreach ($required_fields as $field) {
        if (!isset($_POST[$field]) || empty(trim($_POST[$field]))) {
            // Mengembalikan error jika ada field yang tidak diisi
            echo json_encode(["error" => "Field '$field' is required"], JSON_PRETTY_PRINT);
            exit;
        }
    }

    // Memvalidasi dan menangani file yang diunggah
    if (!isset($_FILES['foto_masakan'])) {
        // Mengembalikan error jika file foto_masakan tidak diunggah
        echo json_encode(["error" => "Field 'foto_masakan' is required"], JSON_PRETTY_PRINT);
        exit;
    }

    $foto_masakan = $_FILES['foto_masakan'];
    $foto_masakan_path = null;
    if ($foto_masakan['error'] == UPLOAD_ERR_OK) {
        // Menentukan direktori untuk menyimpan file yang diunggah
        $upload_dir = 'uploads/';
        if (!is_dir($upload_dir)) {
            mkdir($upload_dir, 0755, true); // Membuat direktori jika belum ada
        }

        // Menentukan path untuk menyimpan file
        $foto_masakan_path = $upload_dir . basename($foto_masakan['name']);
        if (!move_uploaded_file($foto_masakan['tmp_name'], $foto_masakan_path)) {
            // Mengembalikan error jika gagal mengunggah file
            echo json_encode(["error" => "Failed to upload 'foto_masakan'"], JSON_PRETTY_PRINT);
            exit;
        }
    } else {
        // Mengembalikan error jika terjadi kesalahan saat mengunggah file
        echo json_encode(["error" => "Error uploading 'foto_masakan': " . $foto_masakan['error']], JSON_PRETTY_PRINT);
        exit;
    }

    // Mempersiapkan dan mengeksekusi perintah SQL untuk menambahkan resep utama
    $stmt = $conn->prepare("INSERT INTO resep (judul_resep, waktu_memasak, porsi_masakan, kesulitan_memasak, deskripsi_resep, foto_masakan) VALUES (?, ?, ?, ?, ?, ?)");
    $stmt->bind_param("siisss", $_POST['judul_resep'], $_POST['waktu_memasak'], $_POST['porsi_masakan'], $_POST['kesulitan_memasak'], $_POST['deskripsi_resep'], $foto_masakan_path);
    if ($stmt->execute()) {
        $id_resep = $stmt->insert_id; // Mendapatkan ID resep yang baru ditambahkan
        $stmt->close();

        // Menambahkan data alat_memasak
        $alat = explode("\n", $_POST['alat']);
        foreach ($alat as $item) {
            $stmt_alat = $conn->prepare("INSERT INTO alat_memasak (id_resep, isi_alat) VALUES (?, ?)");
            $stmt_alat->bind_param("is", $id_resep, $item);
            if (!$stmt_alat->execute()) {
                // Mengembalikan error jika gagal menambahkan data alat_memasak
                echo json_encode(["error" => $stmt_alat->error], JSON_PRETTY_PRINT);
                exit;
            }
            $stmt_alat->close();
        }

        // Menambahkan data bahan_memasak
        $bahan = explode("\n", $_POST['bahan']);
        foreach ($bahan as $item) {
            $stmt_bahan = $conn->prepare("INSERT INTO bahan_memasak (id_resep, isi_bahan) VALUES (?, ?)");
            $stmt_bahan->bind_param("is", $id_resep, $item);
            if (!$stmt_bahan->execute()) {
                // Mengembalikan error jika gagal menambahkan data bahan_memasak
                echo json_encode(["error" => $stmt_bahan->error], JSON_PRETTY_PRINT);
                exit;
            }
            $stmt_bahan->close();
        }

        // Menambahkan data cara_memasak
        $cara = explode("\n", $_POST['cara']);
        foreach ($cara as $item) {
            $stmt_cara = $conn->prepare("INSERT INTO cara_memasak (id_resep, isi_cara) VALUES (?, ?)");
            $stmt_cara->bind_param("is", $id_resep, $item);
            if (!$stmt_cara->execute()) {
                // Mengembalikan error jika gagal menambahkan data cara_memasak
                echo json_encode(["error" => $stmt_cara->error], JSON_PRETTY_PRINT);
                exit;
            }
            $stmt_cara->close();
        }

        // Mengembalikan pesan sukses jika resep berhasil ditambahkan
        echo json_encode(["message" => "Resep berhasil ditambahkan"], JSON_PRETTY_PRINT);
    } else {
        // Mengembalikan error jika gagal menambahkan resep utama
        echo json_encode(["error" => $stmt->error], JSON_PRETTY_PRINT);
        $stmt->close();
    }
}
?>