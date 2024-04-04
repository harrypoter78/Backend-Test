const MemberRepository = require('./member.repository');

class MemberService {
  constructor() {
    this.memberRepository = new MemberRepository();
  }

  async getAllMembers() {
    try {
      return await this.memberRepository.getAllMembers();
    } catch (error) {
      throw error;
    }
  }

  async getMemberByCode(code) {
    try {
      return await this.memberRepository.getMemberByCode(code);
    } catch (error) {
      throw error;
    }
  }

  async createMember(name) {
    try {
      return await this.memberRepository.createMember(name);
    } catch (error) {
      throw error;
    }
  }
}

module.exports = MemberService;
