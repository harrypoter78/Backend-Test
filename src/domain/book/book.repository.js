const db = require('../../infrastructure/database/config');
const Book = require('./book.entity');

class BookRepository {
  async getAllBooks() {
    try {
      const sql = 'SELECT * FROM books WHERE stock != 0';
      const books = await db.query(sql);
      return books;
    } catch (error) {
      throw error;
    }
  }

  async getBookByCode(code) {
    try {
      const sql = 'SELECT * FROM books WHERE code = ?';
      const books = await db.query(sql, [code]);
      if (books.length === 0) return null;
      return books;
    } catch (error) {
      throw error;
    }
  }

  async createBook(code, title, author, stock) {
    try {
      const sql = 'INSERT INTO books (code, title, author, stock) VALUES (?, ?, ?, ?)';
      await db.query(sql, [code, title, author, stock]);
      return new Book(code, title, author, stock);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = BookRepository;
