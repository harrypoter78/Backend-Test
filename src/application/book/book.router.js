const express = require('express');
const BookController = require('./book.controller');

const router = express.Router();
const bookController = new BookController();

router.get('/', bookController.getAllBooks.bind(bookController));
router.get('/:code', bookController.getBookByCode.bind(bookController));
router.post('/', bookController.createBook.bind(bookController));

/**
 * @swagger
 * /api/books:
 *   get:
 *     summary: Get all books
 *     description: Retrieve a list of all books.
 *     responses:
 *       '200':
 *         description: A JSON array of book objects.
 *   post:
 *     summary: Create a new book
 *     description: Create a new book with the provided data.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               code:
 *                 type: string
 *               title:
 *                 type: string
 *               author:
 *                 type: string
 *               stock:
 *                 type: integer
 *     responses:
 *       '201':
 *         description: The created book object.
 * 
 * /api/books/{code}:
 *   get:
 *     summary: Get book by code
 *     description: Retrieve a book by its unique code.
 *     parameters:
 *       - in: path
 *         name: code
 *         description: book code
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A book object.
 *       '404':
 *         description: book not found.
 */

module.exports = router;
