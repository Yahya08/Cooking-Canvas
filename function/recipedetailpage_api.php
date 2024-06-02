<?php
header("Content-Type: application/json");

// Menyambungkan koneksi ke Database menggunakan file connection.php
include 'connection.php'; 

$request_method = $_SERVER['REQUEST_METHOD'];
$path = parse_url($_SERVER['REQUEST_URI'], PHP_URL_PATH);
$path_parts = explode('/', trim($path, '/'));

// Assuming the script is located at /backend/function/recipedetailpage_api.php
$script_index = array_search('recipedetailpage_api.php', $path_parts);
$action = isset($path_parts[$script_index + 1]) ? $path_parts[$script_index + 1] : '';

// Tentukan tindakan berdasarkan URL path dan metode HTTP
switch ($request_method) {
    case 'GET':
        switch ($action) {
            case 'resep':
                getResep($conn);
                break;
            case 'komentar':
                getKomentar($conn);
                break;
            case 'resep-serupa':
                getResepSerupa($conn);
                break;
            default:
                http_response_code(404);
                echo json_encode(["error" => "Link tidak ditemukan"], JSON_PRETTY_PRINT);
                break;
        }
        break;
    case 'POST':
        switch ($action) {
            case 'komentar':
                postKomentar($conn);
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

// RESEP (GET)
function getResep($conn) {
    $stmt = $conn->prepare("
    SELECT foto_masakan, judul_resep, porsi_masakan, waktu_memasak, deskripsi_resep, alat.isi_alat,bahan.isi_bahan,cara.isi_cara FROM resep
    INNER JOIN (SELECT id_resep, GROUP_CONCAT(isi_alat SEPARATOR ', ') AS isi_alat FROM alat_memasak GROUP BY id_resep) AS alat ON resep.id_resep = alat.id_resep
    INNER JOIN (SELECT id_resep, GROUP_CONCAT(isi_bahan SEPARATOR ', ') AS isi_bahan FROM bahan_memasak GROUP BY id_resep) AS bahan ON resep.id_resep = bahan.id_resep
    INNER JOIN (SELECT id_resep, GROUP_CONCAT(isi_cara SEPARATOR ', ') AS isi_cara FROM cara_memasak GROUP BY id_resep) AS cara ON resep.id_resep = cara.id_resep;"
    );
    if (!$stmt) {
        echo json_encode(["error" => $conn->error], JSON_PRETTY_PRINT);
        exit;
    }
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result === false) {
        echo json_encode(["error" => $stmt->error], JSON_PRETTY_PRINT);
        exit;
    }

    $resep_detail = [];

    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $resep_detail[] = [
                'foto_masakan' => $row["foto_masakan"],
                'judul_resep' => $row["judul_resep"],
                'porsi_masakan' => $row["porsi_masakan"],
                'waktu_memasak' => $row["waktu_memasak"],
                'deskripsi_resep' => $row["deskripsi_resep"],
                'isi_alat' => $row["isi_alat"],
                'isi_bahan' => $row["isi_bahan"],
                'isi_cara' => $row["isi_cara"]
            ];
        }
    } else {
        echo json_encode(["message" => "Tidak ada resep"], JSON_PRETTY_PRINT);
        exit;
    }
    $stmt->close();
    echo json_encode($resep_detail, JSON_PRETTY_PRINT);
}

// TULIS KOMENTAR (POST)
function postKomentar($conn) {
    $input = json_decode(file_get_contents('php://input'), true);
    if (!isset($input['id_user'], $input['text_komentar'])) {
        echo json_encode(["error" => "Input tidak lengkap"], JSON_PRETTY_PRINT);
        exit;
    }

    $stmt = $conn->prepare("INSERT INTO komentar (id_user, text_komentar) VALUES (?, ?)");
    $stmt->bind_param("is", $input['id_user'], $input['text_komentar']);
    if ($stmt->execute()) {
        echo json_encode(["message" => "Komentar berhasil ditambahkan"], JSON_PRETTY_PRINT);
    } else {
        echo json_encode(["error" => $stmt->error], JSON_PRETTY_PRINT);
    }

    $stmt->close();
}
// TULIS KOMENTAR (POST)
// Perlu login dulu sebelum komentar

// PRATINJAU KOMENTAR (GET)
function getKomentar($conn) {
    $stmt = $conn->prepare("SELECT user.nama_lengkap_user, komentar.text_komentar FROM komentar JOIN user ON komentar.id_user = user.id_user");
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result === false) {
        echo json_encode(["error" => $conn->error], JSON_PRETTY_PRINT);
        exit;
    }

    $komentar_detail = [];
    if ($result->num_rows > 0) {
        while ($row = $result->fetch_assoc()) {
            $komentar_detail[] = [
                'nama_lengkap_user' => $row["nama_lengkap_user"],
                'text_komentar' => $row["text_komentar"]
            ];
        }
    } else {
        echo json_encode(["message" => "Tidak ada komentar"], JSON_PRETTY_PRINT);
        exit;
    }

    $stmt->close();
    echo json_encode($komentar_detail, JSON_PRETTY_PRINT);
}

// PRODUK-PRODUK YANG SERUPA (GET)
function getResepSerupa($conn) {
    $stmt = $conn->prepare("SELECT judul_resep, deskripsi_resep FROM resep LIMIT 3;");
    $stmt->execute();
    $result = $stmt->get_result();

    if ($result === false) {
        echo json_encode(["error" => $conn->error], JSON_PRETTY_PRINT);
        exit;
    }

    $produk_serupa = [];

    while ($row = $result->fetch_assoc()) {
        $produk_serupa[] = [
            'judul_resep' => $row["judul_resep"],
            'deskripsi_resep' => $row["deskripsi_resep"]
        ];
    }

    $stmt->close();

    if (empty($produk_serupa)) {
        echo json_encode(["message" => "Tidak ada resep serupa"], JSON_PRETTY_PRINT);
    } else {
        echo json_encode($produk_serupa, JSON_PRETTY_PRINT);
    }
}
?>
