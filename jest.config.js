module.exports = {
    // Direktori tempat berkas-berkas tes disimpan
    roots: ['<rootDir>/test'],
  
    // Daftar ekstensi berkas yang akan dianggap sebagai berkas tes
    testMatch: ['**/*.test.js'],
  
    testPathIgnorePatterns: [
      '/node_modules/', // Direktori node_modules diabaikan
    ],

  };
  