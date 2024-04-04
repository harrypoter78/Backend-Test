const BorrowController = require('../../../src/application/borrow/borrow.controller');

describe('Borrow Controller', () => {
  let borrowController;

  beforeEach(() => {
    borrowController = new BorrowController();
  });

  test('should return all borrowed books', async () => {
    const req = {};
    const res = {
      json: jest.fn(),
    };
    await borrowController.getAllBorrow(req, res);
    expect(res.json).toHaveBeenCalled();
  });

});
