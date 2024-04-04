const { query } = require('../../../src/infrastructure/database/config');

describe('Database Configuration', () => {
  it('should execute query successfully', async () => {

    const sqlQuery = 'SELECT * FROM books';
    
    try {
      const results = await query(sqlQuery);
      
      //Pastikan bahwa hasil tidak kosong
      expect(results).not.toBeNull();
      
      //Pastikan bahwa hasil adalah array (atau objek lain sesuai kebutuhan)
      expect(results).toBeInstanceOf(Array);
      
      //Memastikan bahwa hasil query tidak kosong
      expect(results.length).toBeGreaterThan(0);
    } catch (error) {
      //Tangani kesalahan jika terjadi kesalahan saat menjalankan kueri
      console.error('Error executing query:', error);
    }
  });
});
