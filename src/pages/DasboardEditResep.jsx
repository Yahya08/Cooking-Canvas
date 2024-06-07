import React from 'react';

const Dashboard = () => {
  const recipes = [
    {
      title: 'Nasi goreng Khas Yogyakarta',
      portion: 1,
      time: 120,
      level: 'Sedang',
      description: 'Ayam geprek adalah makanan ayam goreng tepung khas Indonesia yang diulek atau dilumatkan bersama sambal bajak. Sebagian besar sumber menyebut bahwa ayam geprek berasal dari Kota Yogyakarta.',
    },
    // Add more recipe objects as needed
  ];

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Edit Resep</h2>
      <div className="table-responsive">
        <table className="table table-bordered">
          <thead className="bg-light">
            <tr>
              <th>Title</th>
              <th className="text-center">Portion</th>
              <th className="text-center">Time</th>
              <th className="text-center">Level</th>
              <th>Description</th>
              <th className="text-center">Detail</th>
              <th className="text-center">Status</th>
            </tr>
          </thead>
          <tbody>
            {recipes.map((recipe, index) => (
              <tr key={index}>
                <td>{recipe.title}</td>
                <td className="text-center">{recipe.portion}</td>
                <td className="text-center">{recipe.time}</td>
                <td className="text-center">{recipe.level}</td>
                <td>{recipe.description}</td>
                <td className="text-center">
                  <button className="btn btn-primary btn-sm me-2">Check</button>
                </td>
                <td className="text-center">
                  <div className="d-flex justify-content-center">
                    <button className="btn btn-success btn-sm me-2">Edit</button>
                    <button className="btn btn-danger btn-sm">Hapus</button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
