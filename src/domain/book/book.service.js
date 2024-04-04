const BookRepository = require('./book.repository');

class BookService {
  constructor() {
    this.bookRepository = new BookRepository();
  }

  async getAllBooks() {
    try {
      const books = await this.bookRepository.getAllBooks();
      return books;
    } catch (error) {
      throw error;
    }
  }

  async getBookByCode(code) {
    try {
      const book = await this.bookRepository.getBookByCode(code);
      return book;
    } catch (error) {
      throw error;
    }
  }

  async createBook(code, title, author, stock) {
    try {
      const book = await this.bookRepository.createBook(code, title, author, stock);
      return book;
    } catch (error) {
      throw error;
    }
  }
}

module.exports = BookService;
