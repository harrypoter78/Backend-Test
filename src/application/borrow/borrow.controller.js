const BorrowService = require('../../domain/borrow/borrow.service');

class BorrowController {
    constructor() {
        this.borrowService = new BorrowService();
    }

    async getAllBorrow(req, res) {
        try {
          const borrowedBooks = await this.borrowService.getAllBorrow();
          return res.json({ borrowedBooks });
        } catch (error) {
          return res.status(500).json({ error: error.message });
        }
    }

    async getBorrowedBookCountByMember(req, res) {
        try {
            const memberCode = req.params.memberCode;
            const count = await this.borrowService.getBorrowedBookCountByMember(memberCode);
            res.json({ count });
        } catch (error) {
            res.status(500).json({ error: error.message });
        }
    }

    async createBorrow(req, res) {
        try {
            const { memberCode, bookCode, borrowDate } = req.body;
            await this.borrowService.createBorrow(memberCode, bookCode, borrowDate);
            return res.status(201).json({ message: 'Buku berhasil dipinjam.' });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

    async returnBook(req, res) {
        try {
            const { memberCode, bookCode, returnDate } = req.body;
            await this.borrowService.returnBook(memberCode, bookCode, returnDate);
            return res.status(200).json({ message: 'Buku berhasil dikembalikan.' });
        } catch (error) {
            return res.status(500).json({ error: error.message });
        }
    }

}

module.exports = BorrowController;
