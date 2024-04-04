const MemberService = require('../../domain/member/member.service');

class MemberController {
  constructor() {
    this.memberService = new MemberService();
  }

  async getAllMembers(req, res) {
    try {
      const members = await this.memberService.getAllMembers();
      return res.json({ members });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async getMemberByCode(req, res) {
    try {
      const code = req.params.code;
      const member = await this.memberService.getMemberByCode(code);
      if (!member) {
        return res.status(404).json({ message: 'Member not found' });
      }
      return res.json({ member });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

  async createMember(req, res) {
    try {
      const { name } = req.body;
      if (!name) {
        return res.status(400).json({ message: 'Name is required' });
      }
      const member = await this.memberService.createMember(name);
      return res.status(201).json({ member });
    } catch (error) {
      return res.status(500).json({ error: error.message });
    }
  }

}

module.exports = MemberController;
