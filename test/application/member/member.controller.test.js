const MemberController = require('../../../src/application/member/member.controller')

describe('Member Controller', () => {
  let memberController;

  beforeEach(() => {
    memberController = new MemberController();
  });

  test('should return all members', async () => {
    const req = {};
    const res = {
      json: jest.fn(),
    };
    await memberController.getAllMembers(req, res);
    expect(res.json).toHaveBeenCalled();
  });

});
