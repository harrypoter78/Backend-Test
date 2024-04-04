const db = require('../../infrastructure/database/config');
const Member = require('./member.entity');

class MemberRepository {
  constructor() {
    this.members = [];
  }

  async getAllMembers() {
    try {
        const sql = `
          SELECT m.*, COUNT(b.borrow_id) AS borrowed_books_count
          FROM members m
          LEFT JOIN borrowedbooks b ON m.code = b.member_code AND b.return_date IS NULL
          GROUP BY m.code;
        `;
        const members = await db.query(sql);
        return members;
    } catch (error) {
        throw error;
    }
}

  async getMemberByCode(code) {
    try {
      const sql = `
              SELECT m.*, COUNT(b.borrow_id) AS borrowed_books_count
              FROM members m
              LEFT JOIN borrowedbooks b ON m.code = b.member_code AND b.return_date IS NULL
              WHERE m.code = ? 
              GROUP BY m.code;      
            `;
      const members = await db.query(sql, [code]);
      if (members.length === 0) return null;
      return members;
    } catch (error) {
      throw error;
    }
  }

  async createMember(name) {
    try {
      const allMembers = await db.query('SELECT code FROM members');
  
      // Temukan ID terakhir dengan mengurutkan ID secara manual
      let lastId = 0;
      allMembers.forEach(member => {
        const memberIdNumber = parseInt(member.code.substring(3)); // Mengambil angka dari ID
        if (memberIdNumber > lastId) {
          lastId = memberIdNumber;
        }
      });
  
      const nextId = lastId + 1;
      const formattedId = `M00${nextId}`;
      const sql = 'INSERT INTO members (code, name) VALUES (?, ?)';
      await db.query(sql, [formattedId, name]);
      return new Member(formattedId, name);
    } catch (error) {
      throw error;
    }
  }
  
}

module.exports = MemberRepository;
