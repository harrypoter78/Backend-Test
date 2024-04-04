const BorrowService = require('../../../src/domain/borrow/borrow.service');

describe('Borrow Service', () => {
  let borrowService;

  beforeEach(() => {
    borrowService = new BorrowService();
  });

  test('should return all borrowed books', async () => {
    const borrowedBooks = await borrowService.getAllBorrow();
    expect(borrowedBooks).toBeDefined();
  });

});
