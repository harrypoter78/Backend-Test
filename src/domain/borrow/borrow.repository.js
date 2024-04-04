const db = require('../../infrastructure/database/config');
const Borrow = require('./borrow.entity');

class BorrowRepository {
    async getAll() {
        try {
            const sql = 'SELECT * FROM borrowedbooks';
            const borrowedBooks = await db.query(sql);
            return borrowedBooks;
        } catch (error) {
            throw error;
        }
    }

    async getBorrowedBookCountByMember(memberCode) {
        try {
            const sql = 'SELECT COUNT(*) AS count FROM borrowedbooks WHERE member_code = ?';
            const result = await db.query(sql, [memberCode]);
            return result[0].count;
        } catch (error) {
            throw error;
        }
    }

    async createBorrow(memberCode, bookCode, borrowDate) {
        try {            
            // Periksa apakah member sedang dikenai penalty atau tidak
            const isPenaltyActiveQuery = 'SELECT penalty_start_date FROM members WHERE code = ?';
            const [{ penalty_start_date }] = await db.query(isPenaltyActiveQuery, [memberCode]);
            if (penalty_start_date) {
                // Periksa apakah sudah lebih dari 3 hari sejak penalty diterapkan
                const currentTime = new Date();
                const differenceInDays = Math.floor((currentTime - penalty_start_date) / (1000 * 60 * 60 * 24));
                if (differenceInDays < 3) {
                    throw new Error('Member sedang dalam periode penalty dan tidak dapat meminjam buku saat ini.');
                }
            }
            // Periksa apakah member telah meminjam lebih dari 2 buku
            const borrowedBooksCountQuery = 'SELECT COUNT(*) AS borrowed_books_count FROM borrowedbooks WHERE member_code = ? AND return_date IS NULL';
            const [{ borrowed_books_count }] = await db.query(borrowedBooksCountQuery, [memberCode]);
            if (borrowed_books_count >= 2) {
                throw new Error('Member telah meminjam lebih dari 2 buku dan tidak dapat meminjam buku lagi.');
            }

            // Periksa apakah buku sudah dipinjam oleh member lain
            const isBookBorrowedQuery = 'SELECT COUNT(*) AS book_count FROM borrowedbooks WHERE book_code = ? AND return_date IS NULL';
            const [{ book_count }] = await db.query(isBookBorrowedQuery, [bookCode]);
            if (book_count > 0) {
                throw new Error('Buku telah dipinjam oleh member lain dan tidak dapat dipinjam saat ini.');
            }

            // Kurangi stok buku
            const decreaseStockQuery = 'UPDATE Books SET stock = stock - 1 WHERE code = ?';
            await db.query(decreaseStockQuery, [bookCode]);

            //Update waktu penalty
            const delPenaltyQuery = 'UPDATE members SET penalty_start_date = NULL WHERE code = ?';
            await db.query(delPenaltyQuery, [memberCode]);

            // Tambahkan data peminjaman
            const addBorrowQuery = 'INSERT INTO BorrowedBooks (member_code, book_code, borrow_date) VALUES (?, ?, ?)';
            await db.query(addBorrowQuery, [memberCode, bookCode, borrowDate]);

        } catch (error) {
            throw error;
        }
    }

    async returnBook(memberCode, bookCode, returnDate) {
        try {
            // Periksa apakah buku telah dipinjam oleh member
            const isBookBorrowedQuery = 'SELECT COUNT(*) AS book_count FROM borrowedbooks WHERE member_code = ? AND book_code = ? AND return_date IS NULL';
            const [{ book_count }] = await db.query(isBookBorrowedQuery, [memberCode, bookCode]);
            if (book_count === 0) {
                throw new Error('Buku tidak sedang dipinjam oleh member atau telah dikembalikan sebelumnya.');
            }

            // Hitung selisih hari
            const borrowDateQuery = 'SELECT DATE_FORMAT(borrow_date, "%Y-%m-%d") AS borrow_date FROM borrowedbooks WHERE member_code = ? AND book_code = ?';
            const [{ borrow_date }] = await db.query(borrowDateQuery, [memberCode, bookCode]);
            const borrowDateFormatted = new Date(borrow_date);
            const returnDateFormatted = new Date(returnDate);
            const diffInDays = Math.floor((returnDateFormatted - borrowDateFormatted) / (1000 * 60 * 60 * 24));

            // Periksa apakah pengembalian buku setelah lebih dari 7 hari
            const isPenaltyActive = diffInDays > 7;
            if (isPenaltyActive) {
                // Terapkan penalty dan catat tanggal kembali
                const applyPenaltyQuery = 'UPDATE members SET penalty_start_date = DATE(NOW()) WHERE code = ?';
                await db.query(applyPenaltyQuery, [memberCode]);
            }

            // Tandai buku telah dikembalikan
            const returnBookQuery = 'UPDATE borrowedbooks SET return_date = ? WHERE member_code = ? AND book_code = ?';
            await db.query(returnBookQuery, [returnDate, memberCode, bookCode]);

            // Tambahkan stok buku yang dikembalikan
            const increaseStockQuery = 'UPDATE books SET stock = stock + 1 WHERE code = ?';
            await db.query(increaseStockQuery, [bookCode]);
        } catch (error) {
            throw error;
        }
    }
}

module.exports = BorrowRepository;
