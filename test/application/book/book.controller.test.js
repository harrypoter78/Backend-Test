const BookController = require('../../../src/application/book/book.controller');

describe('Book Controller', () => {
  let bookController;

  beforeEach(() => {
    bookController = new BookController();
  });

  test('should return all books', async () => {
    const req = {};
    const res = {
      json: jest.fn(),
    };
    await bookController.getAllBooks(req, res);
    expect(res.json).toHaveBeenCalled();
  });

});
