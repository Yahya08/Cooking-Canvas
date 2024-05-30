import '../style/DasboardAdmin.css';


const DashboardAdmin = () => {
    const requests = [
      {
        title: 'Nasi goreng Khas Yogyakarta',
        portion: 1,
        time: 120,
        level: 'Sedang',
        description: 'Ayam geprek adalah makanan ayam goreng tepung khas Indonesia yang diulek atau dilumatkan bersama sambal bajak...',
      },
      // Add more requests as needed
    ];
  
    return (
      <div className="dashboard">
        <div className="sidebar">
          <button>Permintaan</button>
          <button>Tambah Resep</button>
          <button>Edit Resep</button>
        </div>
        <div className="content">
          <h1>Permintaan resep dari user</h1>
          <table className="recipe-table">
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
              {requests.map((request, index) => (
                <tr key={index}>
                  <td>{request.title}</td>
                  <td>{request.portion}</td>
                  <td>{request.time}</td>
                  <td>{request.level}</td>
                  <td>{request.description}</td>
                  <td><button className="detail-btn">Check</button></td>
                  <td>
                    <button className="accept-btn">Terima</button>
                    <button className="reject-btn">Tolak</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
  };
  
  export default DashboardAdmin;