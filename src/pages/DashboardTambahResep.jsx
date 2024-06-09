import { useState } from 'react';

function DasboardTambahResep() {
  const [judul, setJudul] = useState('');
  const [waktu, setWaktu] = useState('');
  const [porsi, setPorsi] = useState('');
  const [level, setLevel] = useState('Pilih level');
  const [deskripsi, setDeskripsi] = useState('');
  const [alat, setAlat] = useState('');
  const [bahan, setBahan] = useState('');
  const [instruksi, setInstruksi] = useState('');
  const [gambarResep, setGambarResep] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    // Create a FormData object
    const formData = new FormData();
    formData.append('judul_resep', judul);
    formData.append('waktu_memasak', waktu);
    formData.append('porsi_masakan', porsi);
    formData.append('kesulitan_memasak', level);
    formData.append('deskripsi_resep', deskripsi);
    formData.append('alat', alat);
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
    <div className="container mt-5">
      <div className="row mt-4">
        <div className="col">
          <h2>Tambah Resep</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="judul" className="form-label">Judul</label>
              <input type="text" className="form-control" name='judul_resep' id="judul" value={judul} onChange={(e) => setJudul(e.target.value)} placeholder="Masukan judul kamu" />
            </div>
            <div className="row mb-3">
              <div className="col">
                <label htmlFor="waktu" className="form-label">Waktu</label>
                <input type="text" className="form-control" name='waktu_memasak' id="waktu" value={waktu} onChange={(e) => setWaktu(e.target.value)} placeholder="Masukkan estimasi waktu memasak resep" />
              </div>
              <div className="col">
                <label htmlFor="porsi" className="form-label">Porsi</label>
                <input type="text" className="form-control" name='porsi_masakan' id="porsi" value={porsi} onChange={(e) => setPorsi(e.target.value)} placeholder="Masukkan porsi orang pada resep" />
              </div>
              <div className="col">
                <label htmlFor="level" className="form-label">Level</label>
                <select className="form-select" name='kesulitan_memasak' value={level} onChange={(e) => setLevel(e.target.value)}>
                  <option value="Pilih level">Pilih level</option>
                  <option value="Mudah">Mudah</option>
                  <option value="Sedang">Sedang</option>
                  <option value="Sulit">Sulit</option>
                </select>
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="deskripsi" className="form-label">Deskripsi menu</label>
              <textarea className="form-control" name='deskripsi_resep' id="deskripsi" value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)} placeholder="Masukkan penjelasan resep ini"></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="alat" className="form-label">Alat</label>
              <textarea className="form-control" id="alat" value={alat} onChange={(e) => setAlat(e.target.value)} placeholder="Masukkan alat yang digunakan dalam resep"></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="bahan" className="form-label">Bahan</label>
              <textarea className="form-control" name='bahan' id="bahan" value={bahan} onChange={(e) => setBahan(e.target.value)} placeholder="Masukkan bahan yang digunakan dalam resep"></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="instruksi" className="form-label">Instruksi</label>
              <textarea className="form-control" name='cara' id="instruksi" value={instruksi} onChange={(e) => setInstruksi(e.target.value)} placeholder="Langkah-langkah membuat makanan/minuman"></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="gambarResep" className="form-label">Gambar Resep</label>
              <input type="file" className="form-control" name='foto_masakan' id="gambarResep" onChange={handleGambarChange} />
            </div>
            <div className="d-flex justify-content-end">
              <button type="button" className="btn btn-danger me-2">Batal</button>
              <button type="submit" className="btn btn-success">Tambah</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DasboardTambahResep;