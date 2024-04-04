const express = require('express');
const BorrowController = require('./borrow.controller');

const router = express.Router();
const borrowController = new BorrowController();

router.get('/', borrowController.getAllBorrow.bind(borrowController));
router.get('/member/:memberCode/count', borrowController.getBorrowedBookCountByMember.bind(borrowController));
router.post('/', borrowController.createBorrow.bind(borrowController));
router.post('/return', borrowController.returnBook.bind(borrowController));

/**
 * @swagger
 * /api/borrow:
 *   get:
 *     summary: Get all borrowed books
 *     description: Retrieve a list of all borrowed books.
 *     responses:
 *       '200':
 *         description: A JSON array of borrowed book objects.
 *   post:
 *     summary: Borrow a book
 *     description: Borrow a book with the provided data.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               memberCode:
 *                 type: string
 *               bookCode:
 *                 type: string
 *               borrowDate:
 *                  type: string
 *                  format: date
 *     responses:
 *       '201':
 *         description: The created borrowed book object.
 *
 * /api/borrow/return:
 *   post:
 *     summary: Return a borrowed book
 *     description: Return a borrowed book with the provided data.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               memberCode:
 *                 type: string
 *               bookCode:
 *                 type: string
 *               returnDate:
 *                  type: string
 *                  format: date
 *     responses:
 *       '200':
 *         description: The returned book object.
 *
 * /api/borrow/member/{memberCode}/count:
 *   get:
 *     summary: Get borrowed book count by member
 *     description: Retrieve the count of borrowed books by a specific member.
 *     parameters:
 *       - in: path
 *         name: memberCode
 *         description: Member code
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: The count of borrowed books by the member.
 */

module.exports = router;
