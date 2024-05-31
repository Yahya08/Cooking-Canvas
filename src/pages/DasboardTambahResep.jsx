import React, {useState} from "react";

function DasboardTambahResep() {
    const [judul, setJudul] = useState('');
    const [waktu, setWaktu] = useState('');
    const [porsi, setPorsi] = useState('');
    const [level, setLevel] = useState('');
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
      <div className="container">
        {/* <nav className="navbar">
          <span className="navbar-brand mb-0 h1">Logo</span>
          <button className="btn btn-outline-dark">Log Out</button>
        </nav> */}
  
        <div className="row mt-4">
          <div className="col">
            <button className="btn btn-outline-dark me-2">Permintaan</button>
            <button className="btn btn-outline-dark me-2">Tambah Resep</button>
            <button className="btn btn-outline-dark">Edit Resep</button>
          </div>
        </div>
  
        <div className="row mt-4">
          <div className="col">
            <h2>Tambah resep</h2>
            <form onSubmit={handleSubmit}>
              <div className="mb-3">
                <label htmlFor="judul" className="form-label">Judul</label>
                <input type="text" className="form-control" id="judul" value={judul} onChange={(e) => setJudul(e.target.value)} />
              </div>
              <div className="mb-3">
                <label htmlFor="waktu" className="form-label">Waktu</label>
                <input type="text" className="form-control" id="waktu" value={waktu} onChange={(e) => setWaktu(e.target.value)} placeholder="Masukan estimasi waktu memasak resep" />
              </div>
              <div className="mb-3">
                <label htmlFor="porsi" className="form-label">Porsi</label>
                <input type="text" className="form-control" id="porsi" value={porsi} onChange={(e) => setPorsi(e.target.value)} placeholder="Masukan porsi orang pada resep" />
              </div>
              <div className="mb-3">
                <label htmlFor="level" className="form-label">Level</label>
                <input type="text" className="form-control" id="level" value={level} onChange={(e) => setLevel(e.target.value)} placeholder="Masukan tingkat kesulitan dari resep Ini ex: mudah, sedang, sulit." />
              </div>
              <div className="mb-3">
                <label htmlFor="deskripsi" className="form-label">Deskripsi menu</label>
                <textarea className="form-control" id="deskripsi" value={deskripsi} onChange={(e) => setDeskripsi(e.target.value)}></textarea>
              </div>
              <div className="mb -3">
                <label htmlFor="alat" className="form-label">Alat</label>
                <input type="text" className="form-control" id="alat" value={alat} onChange={(e) => setAlat(e.target.value)} placeholder="Masukan alat yang digunakan dalam resep" />
              </div>
              <div className="mb-3">
                <label htmlFor="bahan" className="form-label">Bahan</label>
                <input type="text" className="form-control" id="bahan" value={bahan} onChange={(e) => setBahan(e.target.value)} placeholder="Masukan alat yang digunakan dalam resep" />
              </div>
              <button type="submit" className="btn btn-outline-dark">Submit</button>
            </form>
          </div>
        </div>
      </div>
    );
  }
  export default DasboardTambahResep;