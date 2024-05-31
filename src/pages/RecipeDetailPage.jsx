import './style/RecipeDetailPage.css';  // Ensure the path is correct relative to your project structure
import { useState } from 'react';


const RecipeDetailPage = () => {
  const [comments, setComments] = useState([
    { name: 'Irfan Andryanto', comment: 'Yummmyyy' },
    { name: 'Hamin Nur Khamid', comment: 'Enak pake serundil mantap kayanya' },
    { name: 'Ilham Mustaqim', comment: 'Masak kentangnya jangan terlalu kering' },
    { name: 'Yahya', comment: 'Lumayan buat akhir bulan di kos' },
  ]);

  const [newComment, setNewComment] = useState('');

  const handleCommentChange = (e) => {
    setNewComment(e.target.value);
  };

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    setComments([...comments, { name: 'Anonymous', comment: newComment }]);
    setNewComment('');
  };

  return (
    <div className="recipe-detail-page container">
      <div className="row">
        <div className="col-md-6">
          <img
            src="https://via.placeholder.com/400"
            alt="Ayam Goreng Geprek"
            className="img-fluid"
          />
        </div>
        <div className="col-md-6">
          <h1>Ayam Goreng Geprek</h1>
          <p>1-2 porsi | waktu: berapa lama</p>
          <p>
            Ayam geprek adalah makanan ayam goreng tepung khas Indonesia yang dilulek atau dilumatkan bersama sambal bajak. Sebagian besar sumber menyebut bahwa ayam geprek berasal dari Kota Yogyakarta. Kini, ayam geprek telah menjadi hidangan populer yang dapat ditemukan di hampir semua kota besar di Indonesia.
          </p>
        </div>
      </div>
      <div className="row">
        <div className="col-md-6">
          <h2>Peralatan</h2>
          <ul>
            <li>1 buah wajan</li>
            <li>1 buah sutil</li>
            <li>1 buah penggorengan</li>
            <li>1 buah cobek</li>
          </ul>
        </div>
        <div className="col-md-6">
          <h2>Bahan</h2>
          <ul>
            <li>1 buah ayam</li>
            <li>1 cabai rawit merah</li>
            <li>1 siung bawang putih</li>
            <li>1 siung bawang merah</li>
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h2>Cara membuat</h2>
          <ol>
            <li>Cuci bersih ayam dan marinasi ayam dengan jeruk nipis 20 menit. Diam sejenak sambil siapkan bahan lainnya. Kemudian dilumuri.</li>
            <li>Cuci bersih ayam yang sudah dimarinasi. Tiriskan. Kemudian siapkan tepung, tambahkan bumbu halus yg sudah diblender. Balurkan tepung pada ayam sambil ditekan-tekan. Ulangi 2x.</li>
            <li>Goreng ayam dalam minyak panas hingga krispi dengan api sedang cenderung kecil. Bolak balik ayam supaya matang merata.</li>
            <li>Untuk sambal, ulek semua bahan sambal. Lalu siram sambal dengan minyak panas bekas menggoreng ayam tadi. Tes rasa. Lalu geprek ayam bersama sambal.</li>
            <li>Ayam geprek siap disajikan dengan nasi hangat.</li>
          </ol>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h2>Tulis komentar</h2>
          <form onSubmit={handleCommentSubmit}>
            <div className="mb-3">
              <textarea
                className="form-control"
                value={newComment}
                onChange={handleCommentChange}
                rows="3"
                placeholder="Komentar"
              />
            </div>
            <button type="submit" className="btn btn-primary">Post</button>
          </form>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h2>Pritinjau Komentar</h2>
          <ul className="list-group">
            {comments.map((comment, index) => (
              <li key={index} className="list-group-item">
                <strong>{comment.name}</strong>: {comment.comment}
              </li>
            ))}
          </ul>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <h2>Produk-produk yang serupa</h2>
          <div className="row">
            <div className="col-md-4">
              <div className="card">
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="Resep 1" />
                <div className="card-body">
                  <h5 className="card-title">Resep 1</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="Resep 2" />
                <div className="card-body">
                  <h5 className="card-title">Resep 2</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card">
                <img src="https://via.placeholder.com/150" className="card-img-top" alt="Resep 3" />
                <div className="card-body">
                  <h5 className="card-title">Resep 3</h5>
                  <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RecipeDetailPage;
