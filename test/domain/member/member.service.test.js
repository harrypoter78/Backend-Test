const MemberService = require('../../../src/domain/member/member.service')

describe('Member Service', () => {
  let memberService;

  beforeEach(() => {
    memberService = new MemberService();
  });

  test('should return all members', async () => {
    const members = await memberService.getAllMembers();
    expect(members).toBeDefined();
  });

});
