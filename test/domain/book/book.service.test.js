const BookService = require('../../../src/domain/book/book.service');

describe('Book Service', () => {
  let bookService;

  beforeEach(() => {
    bookService = new BookService();
  });

  test('should return all books', async () => {
    const books = await bookService.getAllBooks();
    expect(books).toBeDefined();
  });

});
