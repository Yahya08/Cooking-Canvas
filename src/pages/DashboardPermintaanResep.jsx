import React, { useEffect, useState } from 'react';

const Dashboard = () => {
  const [recipes, setRecipes] = useState([]);

  useEffect(() => {
    fetch('function/dashboardadminpage_api.php/permintaan')
      .then(response => response.json())
      .then(data => {
        // Urutkan data berdasarkan id_resep
        const sortedData = data.sort((a, b) => a.id_resep - b.id_resep);

        const formattedRecipes = sortedData.map(item => ({
          id: item.id_resep,
          title: item.judul_resep,
          portion: item.porsi_masakan,
          time: item.waktu_memasak,
          level: item.kesulitan_memasak,
          description: item.deskripsi_resep,
        }));

        setRecipes(formattedRecipes);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  const handleAccept = (id) => {
    fetch(`function/dashboardadminpage_api.php/terima-resep/${id}`, {
      method: 'POST',
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Jika berhasil, refresh data
      return response.json();
    })
    .then(data => {
      // Refresh data setelah berhasil
      const updatedRecipes = recipes.filter(recipe => recipe.id !== id);
      setRecipes(updatedRecipes);
    })
    .catch(error => {
      console.error('Error accepting recipe:', error);
    });
  };

  const handleReject = (id) => {
    fetch(`function/dashboardadminpage_api.php/tolak-resep/${id}`, {
      method: 'POST',
    })
    .then(response => {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      // Jika berhasil, refresh data
      return response.json();
    })
    .then(data => {
      // Refresh data setelah berhasil
      const updatedRecipes = recipes.filter(recipe => recipe.id !== id);
      setRecipes(updatedRecipes);
    })
    .catch(error => {
      console.error('Error rejecting recipe:', error);
    });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Permintaan Resep Dari User</h2>
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
                    <button className="btn btn-success btn-sm me-2" onClick={() => handleAccept(recipe.id)}>Terima</button>
                    <button className="btn btn-danger btn-sm" onClick={() => handleReject(recipe.id)}>Tolak</button>
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