const BorrowRepository = require('../../../src/domain/borrow/borrow.repository');

describe('Borrow Repository', () => {
  let borrowRepository;

  beforeEach(() => {
    borrowRepository = new BorrowRepository();
  });

  test('should return all borrowed books', () => {
    const borrowedBooks = borrowRepository.getAll();
    expect(borrowedBooks).toBeDefined();
  });

});
