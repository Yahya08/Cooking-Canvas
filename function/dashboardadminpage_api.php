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
    case 'GET':
        // Mendapatkan elemen array berdasarkan indeks setelah script_index
        $id_resep = isset($path_parts[$script_index + 2]) ? $path_parts[$script_index + 2] : '';
        switch ($action) {
            case 'permintaan':
                getPermintaan($conn);
                break;
            case 'detail-resep':
                // Panggil fungsi getDetailResep dengan id_resep dari path
                getDetailResep($conn, $id_resep);
                break;
                case 'edit-resep':
                    getEditResep($conn, $id_resep);
                    break;
                case 'update-resep':
                    postUpdateResep($conn, $id_resep);
                    break;                
            default:
                http_response_code(404);
                echo json_encode(["error" => "Link tidak ditemukan"], JSON_PRETTY_PRINT);
                break;
        }
        break;
    case 'POST':
        switch ($action) {
    case 'tambah-resep':
        postTambahResep($conn);
        break;
    case 'update-resep':
        // Untuk 'update-resep', ID resep harus diambil dari bagian jalur URL
        $id_resep = isset($path_parts[$script_index + 2]) ? $path_parts[$script_index + 2] : null;
        postUpdateResep($conn, $id_resep);
        break;
    case 'hapus-resep':
        // Untuk 'hapus-resep', ID resep harus diambil dari bagian jalur URL
        $id_resep = isset($path_parts[$script_index + 2]) ? $path_parts[$script_index + 2] : null;
        postHapusResep($conn, $id_resep);
        break;
    case 'terima-resep':
        // Untuk 'terima-resep', ID resep harus diambil dari bagian jalur URL
        $id_resep = isset($path_parts[$script_index + 2]) ? $path_parts[$script_index + 2] : null;
        postTerimaResep($conn, $id_resep);
        break;
    case 'tolak-resep':
        // Untuk 'tolak-resep', ID resep harus diambil dari bagian jalur URL
        $id_resep = isset($path_parts[$script_index + 2]) ? $path_parts[$script_index + 2] : null;
        postTolakResep($conn, $id_resep);
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

// TAMPILKAN RESEP PERMINTAAN (GET)
function getPermintaan($conn) {
    // Menampilkan Resep Yang Belum Disetujui
    $stmt = $conn->prepare("
        SELECT id_resep, judul_resep, porsi_masakan, waktu_memasak, kesulitan_memasak, deskripsi_resep FROM resep WHERE status_terima = 0;
    ");
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result === false) {
        echo json_encode(["error" => $conn->error], JSON_PRETTY_PRINT);
        exit;
    }

    $permintaan_setujui = [];

    while ($row = $result->fetch_assoc()) {
        $permintaan_setujui[] = [
            'id_resep' => $row["id_resep"],
            'judul_resep' => $row["judul_resep"],
            'porsi_masakan' => $row["porsi_masakan"],
            'waktu_memasak' => $row["waktu_memasak"],
            'kesulitan_memasak' => $row["kesulitan_memasak"],
            'deskripsi_resep' => $row["deskripsi_resep"]
        ];
    }

    $stmt->close();

    if (empty($permintaan_setujui)) {
        echo json_encode(["message" => "Tidak ada permintaan persetujuan"], JSON_PRETTY_PRINT);
    } else {
        echo json_encode($permintaan_setujui, JSON_PRETTY_PRINT);
    }
}


// SETUJUI RESEP (POST)
function postTerimaResep($conn, $id_resep) {
    $stmt = $conn->prepare("UPDATE resep SET status_terima = 1 WHERE id_resep = ?");
    $stmt->bind_param("i", $id_resep);

    if ($stmt->execute()) {
        echo json_encode(["message" => "Resep telah diterima"], JSON_PRETTY_PRINT);
    } else {
        echo json_encode(["error" => $stmt->error], JSON_PRETTY_PRINT);
    }

    $stmt->close();
}

// TOLAK RESEP (POST)
function postTolakResep($conn, $id_resep) {
    $stmt = $conn->prepare("UPDATE resep SET status_terima = 2 WHERE id_resep = ?");
    $stmt->bind_param("i", $id_resep);

    if ($stmt->execute()) {
        echo json_encode(["message" => "Resep berhasil ditolak"], JSON_PRETTY_PRINT);
    } else {
        echo json_encode(["error" => $stmt->error], JSON_PRETTY_PRINT);
    }

    $stmt->close();
}

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

// DETAIL RESEP (GET)
function getDetailResep($conn, $id_resep) {
    $stmt = $conn->prepare("
    SELECT resep.foto_masakan, resep.judul_resep, resep.porsi_masakan, resep.waktu_memasak, user.nama_lengkap_user, admin.nama_lengkap_admin, resep.deskripsi_resep, alat.isi_alat, bahan.isi_bahan, cara.isi_cara FROM resep
    INNER JOIN (SELECT id_resep, GROUP_CONCAT(isi_alat SEPARATOR ', ') AS isi_alat FROM alat_memasak GROUP BY id_resep) AS alat ON resep.id_resep = alat.id_resep
    INNER JOIN (SELECT id_resep, GROUP_CONCAT(isi_bahan SEPARATOR ', ') AS isi_bahan FROM bahan_memasak GROUP BY id_resep) AS bahan ON resep.id_resep = bahan.id_resep
    INNER JOIN (SELECT id_resep, GROUP_CONCAT(isi_cara SEPARATOR ', ') AS isi_cara FROM cara_memasak GROUP BY id_resep) AS cara ON resep.id_resep = cara.id_resep
    LEFT JOIN user ON resep.id_user = user.id_user
    LEFT JOIN admin ON resep.id_admin = admin.id_admin
    
    WHERE resep.id_resep = ?;
    ");
    $stmt->bind_param("i", $id_resep);
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result === false) {
        echo json_encode(["error" => $conn->error], JSON_PRETTY_PRINT);
        exit;
    }

    $detail_resep = $result->fetch_assoc();

    $stmt->close();

    if (!$detail_resep) {
        echo json_encode(["message" => "Resep tidak ditemukan"], JSON_PRETTY_PRINT);
    } else {
        echo json_encode($detail_resep, JSON_PRETTY_PRINT);
    }
}

// EDIT RESEP (GET)
function getEditResep($conn, $id_resep) {
    getDetailResep($conn, $id_resep);
}

// HAPUS RESEP (POST)
function postHapusResep($conn, $id_resep) {
    $stmt = $conn->prepare("DELETE FROM resep WHERE id_resep = ?");
    $stmt->bind_param("i", $id_resep);
    
    if ($stmt->execute()) {
        // Hapus juga detail resep dari tabel lain jika diperlukan
        $stmt_alat = $conn->prepare("DELETE FROM alat_memasak WHERE id_resep = ?");
        $stmt_alat->bind_param("i", $id_resep);
        $stmt_alat->execute();

        $stmt_bahan = $conn->prepare("DELETE FROM bahan_memasak WHERE id_resep = ?");
        $stmt_bahan->bind_param("i", $id_resep);
        $stmt_bahan->execute();

        $stmt_cara = $conn->prepare("DELETE FROM cara_memasak WHERE id_resep = ?");
        $stmt_cara->bind_param("i", $id_resep);
        $stmt_cara->execute();

        echo json_encode(["message" => "Resep berhasil dihapus"], JSON_PRETTY_PRINT);
    } else {
        echo json_encode(["error" => $stmt->error], JSON_PRETTY_PRINT);
    }

    $stmt->close();
    $stmt_alat->close();
    $stmt_bahan->close();
    $stmt_cara->close();
}


?>