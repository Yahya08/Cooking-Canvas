import { useState } from 'react';

function TambahResepUser() {
  const [judul, setJudul] = useState('');
  const [waktu, setWaktu] = useState('');
  const [deskripsi, setDeskripsi] = useState('');
  const [bahan, setBahan] = useState('');
  const [instruksi, setInstruksi] = useState('');
  const [gambarResep, setGambarResep] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    const formData = new FormData();
    formData.append('judul_resep', judul);
    formData.append('waktu_memasak', waktu);
    formData.append('deskripsi_resep', deskripsi);
    formData.append('bahan', bahan);
    formData.append('cara', instruksi);
    formData.append('foto_masakan', gambarResep);

    try {
      const response = await fetch('function/dashboardadminpage_api.php/tambah-resep', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const responseData = await response.json();
      console.log('Response:', responseData);
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const handleGambarChange = (e) => {
    setGambarResep(e.target.files[0]);
  };

  return (
    <div className="container">
      <h2>Tambah resep baru</h2>
      <div className="row">
        <div className="col-md-8">
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="judul" className="form-label">Judul</label>
              <input type="text" className="form-control" id="judul" value={judul} onChange={(e) => setJudul(e.target.value)} placeholder="Masukan judul kamu" />
            </div>
            <div className="mb-3">
              <label htmlFor="waktu" className="form-label">Waktu</label>
              <input type="text" className="form-control" id="waktu" value={waktu} onChange={(e) => setWaktu(e.target.value)} placeholder="Masukan estimasi waktu memasak resep" />
            </div>
            <div className="mb-3">
              <label htmlFor="deskripsi" className="form-label">Deskripsi menu</label>
              <textarea className="form-control" id="deskripsi" value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)} placeholder="Masukan penjelasan resep ini" rows="4"></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="bahan" className="form-label">Bahan</label>
              <textarea className="form-control" id="bahan" value={bahan} onChange={(e) => setBahan(e.target.value)} placeholder="Masukan alat yang digunakan dalam resep" rows="4"></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="instruksi" className="form-label">Intruksi</label>
              <textarea className="form-control" id="instruksi" value={instruksi} onChange={(e) => setInstruksi(e.target.value)} placeholder="Langkah - langkah membuat makanan / minuman" rows="4"></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="gambarResep" className="form-label">Gambar Resep</label>
              <input type="file" className="form-control" id="gambarResep" onChange={handleGambarChange} />
            </div>
            <div className="d-flex">
              <button type="button" className="btn btn-danger me-2">Batal</button>
              <button type="submit" className="btn btn-success">Tambah</button>
            </div>
          </form>
        </div>
        <div className="col-md-4 d-flex align-items-stretch">
          <div className="card shadow-sm w-100">
            <div className="card-body d-flex align-items-center justify-content-center p-0">
              <img src="https://cdn.pixabay.com/photo/2021/09/20/06/55/spaghetti-6639970_1280.jpg" alt="Cooking" className="img-fluid rounded" style={{objectFit: 'cover', height: '100%', width: '100%'}} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default TambahResepUser;