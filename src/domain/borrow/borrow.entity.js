class Borrow {
    constructor(borrowId, memberCode, bookCode, borrowDate, returnDate) {
        this.borrowId = borrowId;
        this.memberCode = memberCode;
        this.bookCode = bookCode;
        this.borrowDate = borrowDate;
        this.returnDate = returnDate;
    }
}

module.exports = Borrow;
