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
function postTambahResep($conn) {
    $input = json_decode(file_get_contents('php://input'), true);
    if (!isset($input['judul_resep'], $input['waktu_memasak'], $input['porsi_masakan'], $input['kesulitan_memasak'], $input['alat'], $input['bahan'], $input['cara'], $input['deskripsi_resep'])) {
        echo json_encode(["error" => "Input tidak lengkap"], JSON_PRETTY_PRINT);
        exit;
    }

    // Memecah baris baru menjadi array untuk alat, bahan, dan cara
    $alat = $input['alat'];
    $bahan = $input['bahan'];
    $cara = $input['cara'];

    $stmt = $conn->prepare("INSERT INTO resep (judul_resep, waktu_memasak, porsi_masakan, kesulitan_memasak, deskripsi_resep) VALUES (?, ?, ?, ?, ?)");
    $stmt->bind_param("ssiss", $input['judul_resep'], $input['waktu_memasak'], $input['porsi_masakan'], $input['kesulitan_memasak'], $input['deskripsi_resep']);
    if ($stmt->execute()) {
        $id_resep = $stmt->insert_id;

        // Menyimpan alat
        foreach ($alat as $item) {
            $stmt_alat = $conn->prepare("INSERT INTO alat_memasak (id_resep, isi_alat) VALUES (?, ?)");
            $stmt_alat->bind_param("is", $id_resep, $item);
            $stmt_alat->execute();
            $stmt_alat->close();
        }

        // Menyimpan bahan
        foreach ($bahan as $item) {
            $stmt_bahan = $conn->prepare("INSERT INTO bahan_memasak (id_resep, isi_bahan) VALUES (?, ?)");
            $stmt_bahan->bind_param("is", $id_resep, $item);
            $stmt_bahan->execute();
            $stmt_bahan->close();
        }

        // Menyimpan cara
        foreach ($cara as $item) {
            $stmt_cara = $conn->prepare("INSERT INTO cara_memasak (id_resep, isi_cara) VALUES (?, ?)");
            $stmt_cara->bind_param("is", $id_resep, $item);
            $stmt_cara->execute();
            $stmt_cara->close();
        }

        echo json_encode(["message" => "Resep berhasil ditambahkan"], JSON_PRETTY_PRINT);
    } else {
        echo json_encode(["error" => $stmt->error], JSON_PRETTY_PRINT);
    }

    $stmt->close();
}



// UPDATE RESEP (POST)
function postUpdateResep($conn, $id_resep) {
    $input = json_decode(file_get_contents('php://input'), true);

    $stmt = $conn->prepare("UPDATE resep SET judul_resep = ?, waktu_memasak = ?, porsi_masakan = ?, deskripsi_resep = ?, foto_masakan = ?, kesulitan_memasak = ? WHERE id_resep = ?");
    $stmt->bind_param("siisssi", $input['judul_resep'], $input['waktu_memasak'], $input['porsi_masakan'], $input['deskripsi_resep'], $input['foto_masakan'], $input['kesulitan_memasak'], $id_resep);
    if ($stmt->execute()) {
        $stmt->close();

        // Update alat_memasak, bahan_memasak, and cara_memasak tables
        if (isset($input['isi_alat'])) {
            // Delete existing alat
            $stmt = $conn->prepare("DELETE FROM alat_memasak WHERE id_resep = ?");
            $stmt->bind_param("i", $id_resep);
            $stmt->execute();
            $stmt->close();

            // Insert new alat
            $alat = explode("\n", $input['isi_alat']);
            foreach ($alat as $isi_alat) {
                $stmt = $conn->prepare("INSERT INTO alat_memasak (id_resep, isi_alat) VALUES (?, ?)");
                $stmt->bind_param("is", $id_resep, $isi_alat);
                if (!$stmt->execute()) {
                    echo json_encode(["error" => $stmt->error], JSON_PRETTY_PRINT);
                    exit;
                }
            }
        }

        if (isset($input['isi_bahan'])) {
            // Delete existing bahan
            $stmt = $conn->prepare("DELETE FROM bahan_memasak WHERE id_resep = ?");
            $stmt->bind_param("i", $id_resep);
            $stmt->execute();
            $stmt->close();

            // Insert new bahan
            $bahan = explode("\n", $input['isi_bahan']);
            foreach ($bahan as $isi_bahan) {
                $stmt = $conn->prepare("INSERT INTO bahan_memasak (id_resep, isi_bahan) VALUES (?, ?)");
                $stmt->bind_param("is", $id_resep, $isi_bahan);
                if (!$stmt->execute()) {
                    echo json_encode(["error" => $stmt->error], JSON_PRETTY_PRINT);
                    exit;
                }
            }
        }

        if (isset($input['isi_cara'])) {
            // Delete existing cara
            $stmt = $conn->prepare("DELETE FROM cara_memasak WHERE id_resep = ?");
            $stmt->bind_param("i", $id_resep);
            $stmt->execute();
            $stmt->close();

            // Insert new cara
            $cara = explode("\n", $input['isi_cara']);
            foreach ($cara as $isi_cara) {
                $stmt = $conn->prepare("INSERT INTO cara_memasak (id_resep, isi_cara) VALUES (?, ?)");
                $stmt->bind_param("is", $id_resep, $isi_cara);
                if (!$stmt->execute()) {
                    echo json_encode(["error" => $stmt->error], JSON_PRETTY_PRINT);
                    exit;
                }
            }
        }

        echo json_encode(["message" => "Resep dan detail berhasil diperbarui"], JSON_PRETTY_PRINT);
    } else {
        echo json_encode(["error" => $stmt->error], JSON_PRETTY_PRINT);
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