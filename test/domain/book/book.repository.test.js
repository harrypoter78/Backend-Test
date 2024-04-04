const BookRepository = require('../../../src/domain/book/book.repository');

describe('Book Repository', () => {
  let bookRepository;

  beforeEach(() => {
    bookRepository = new BookRepository();
  });

  test('should return all books', () => {
    const books = bookRepository.getAllBooks();
    expect(books).toBeDefined();
  });
  
});
