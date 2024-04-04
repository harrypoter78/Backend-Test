const MemberRepository = require('../../../src/domain/member/member.repository')

describe('Member Repository', () => {
  let memberRepository;

  beforeEach(() => {
    memberRepository = new MemberRepository();
  });

  test('should return all members', () => {
    const members = memberRepository.getAllMembers();
    expect(members).toBeDefined();
  });

});
