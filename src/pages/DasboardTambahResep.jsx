import { useState } from 'react';

function DasboardTambahResep() {
  const [judul, setJudul] = useState('');
  const [waktu, setWaktu] = useState('');
  const [porsi, setPorsi] = useState('');
  const [level, setLevel] = useState('mudah'); // Set default to 'mudah'
  const [deskripsi, setDeskripsi] = useState('');
  const [alat, setAlat] = useState('');
  const [bahan, setBahan] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    // Lakukan sesuatu dengan data yang diinput
    console.log('Judul:', judul);
    console.log('Waktu:', waktu);
    console.log('Porsi:', porsi);
    console.log('Level:', level);
    console.log('Deskripsi:', deskripsi);
    console.log('Alat:', alat);
    console.log('Bahan:', bahan);
  };

  return (
    <div className="container mt-5">
      {/* <div className="row mt-4">
        <div className="col">
          <button className="btn btn-outline-dark me-2">Permintaan</button>
          <button className="btn btn-outline-dark me-2">Tambah Resep</button>
          <button className="btn btn-outline-dark">Edit Resep</button>
        </div>
      </div> */}

      <div className="row mt-4">
        <div className="col">
          <h2>Tambah Resep</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-3">
              <label htmlFor="judul" className="form-label">Judul</label>
              <input type="text" className="form-control" id="judul" value={judul} onChange={(e) => setJudul(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="waktu" className="form-label">Waktu</label>
              <input type="text" className="form-control" id="waktu" value={waktu} onChange={(e) => setWaktu(e.target.value)} placeholder="Masukkan estimasi waktu memasak resep" />
            </div>
            <div className="mb-3">
              <label htmlFor="porsi" className="form-label">Porsi</label>
              <input type="text" className="form-control" id="porsi" value={porsi} onChange={(e) => setPorsi(e.target.value)} placeholder="Masukkan porsi orang pada resep" />
            </div>
            <div className="mb-3">
              <label htmlFor="level" className="form-label">Level</label>
              <select className="form-select" id="level" value={level} onChange={(e) => setLevel(e.target.value)}>
                <option value="mudah">Mudah</option>
                <option value="sedang">Sedang</option>
                <option value="sulit">Sulit</option>
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="deskripsi" className="form-label">Deskripsi Menu</label>
              <textarea className="form-control" id="deskripsi" value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)}></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="alat" className="form-label">Alat</label>
              <textarea className="form-control" id="alat" value={alat} onChange={(e) => setAlat(e.target.value)} placeholder="Masukkan alat yang digunakan dalam resep"></textarea>
            </div>
            <div className="mb-3">
              <label htmlFor="bahan" className="form-label">Bahan</label>
              <textarea className="form-control" id="bahan" value={bahan} onChange={(e) => setBahan(e.target.value)} placeholder="Masukkan bahan yang digunakan dalam resep"></textarea>
            </div>
            <button type="submit" className="btn btn-outline-dark">Submit</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default DasboardTambahResep;
