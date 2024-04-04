const BookService = require('../../domain/book/book.service');

class BookController {
  constructor() {
    this.bookService = new BookService();
  }

  async getAllBooks(req, res) {
    try {
      const books = await this.bookService.getAllBooks();
      return res.json({ books });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getBookByCode(req, res) {
    try {
      const code = req.params.code;
      const book = await this.bookService.getBookByCode(code);
      if (!book) {
        return res.status(404).json({ message: 'Book not found' });
      }
      return res.json({ book });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async createBook(req, res) {
    try {
      const { code, title, author, stock } = req.body;
      const newBook = await this.bookService.createBook(code, title, author, stock);
      return res.status(201).json({ book: newBook });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }
}

module.exports = BookController;
