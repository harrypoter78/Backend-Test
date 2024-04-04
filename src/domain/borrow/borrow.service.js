const BorrowRepository = require('./borrow.repository');

class BorrowService {
    constructor() {
        this.borrowRepository = new BorrowRepository();
    }

    async getAllBorrow() {
        try {
          const borrowedBooks = await this.borrowRepository.getAll();
          return borrowedBooks;
        } catch (error) {
          throw error;
        }
    }

    async getBorrowedBookCountByMember(memberCode) {
        try {
            const count = await this.borrowRepository.getBorrowedBookCountByMember(memberCode);
            return count;
        } catch (error) {
            throw error;
        }
    }

    async createBorrow(memberCode, bookCode, borrowDate) {
        try {
            await this.borrowRepository.createBorrow(memberCode, bookCode, borrowDate);
        } catch (error) {
            throw error;
        }
    }

    async returnBook(memberCode, bookCode, returnDate) {
        try {
            await this.borrowRepository.returnBook(memberCode, bookCode, returnDate);
        } catch (error) {
            throw error;
        }
    }

}

module.exports = BorrowService;
