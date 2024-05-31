import { useState } from 'react';

const DashboardEditResep = () => {
  const [resepData] = useState([
    {
      title: 'Nasi goreng Khas Yogyakarta',
      portion: 1,
      time: 120,
      level: 'Sedang',
      description: 'Ayam geprek adalah makanan ayam goreng tepung khas Indonesia yang dilulek atau dilumatlean bersama sambal bajak. Sebagian besar sumber menyebut bahwa ayam geprek berasal dari Kota Yogyakarta.',
    },
    {
      title: 'Nasi goreng Khas Yogyakarta',
      portion: 1,
      time: 120,
      level: 'Sedang',
      description: 'Ayam geprek adalah makanan ayam goreng tepung khas Indonesia yang dilulek atau dilumatlean bersama sambal bajak. Sebagian besar sumber menyebut bahwa ayam geprek berasal dari Kota Yogyakarta.',
    },
    // Tambahkan data resep lainnya di sini
  ]);

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
          <h2>Permintaan resep dari user</h2>
          <table className="table">
            <thead>
              <tr>
                <th>Title</th>
                <th>Portion</th>
                <th>Time</th>
                <th>Level</th>
                <th>Description</th>
                <th>Detail</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {resepData.map((resep, index) => (
                <tr key={index}>
                  <td>{resep.title}</td>
                  <td>{resep.portion}</td>
                  <td>{resep.time}</td>
                  <td>{resep.level}</td>
                  <td>{resep.description}</td>
                  <td>
                    <button className="btn btn-outline-primary me-2">Check</button>
                  </td>
                  <td>
                    <div className="d-flex flex-column">
                      <div className="d-flex">
                        <button className="btn btn-outline-success me-2">Edit</button>
                        <button className="btn btn-outline-danger">Hapus</button>
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DashboardEditResep;