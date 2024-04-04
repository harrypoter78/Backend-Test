const mysql = require('mysql');

// Konfigurasi koneksi ke database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'eigen_test'
});

// Fungsi untuk melakukan kueri ke database
function query(sql, values) {
  return new Promise((resolve, reject) => {
    connection.query(sql, values, (error, results) => {
      if (error) {
        reject(error); // Janji ditolak jika terjadi kesalahan saat menjalankan kueri
      } else {
        resolve(results); // Janji berhasil jika kueri berhasil dijalankan
      }
    });
  });
}

module.exports = {
  query
};
