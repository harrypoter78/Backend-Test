const express = require('express');
const MemberController = require('./member.controller');

const router = express.Router();
const memberController = new MemberController();

router.get('/', memberController.getAllMembers.bind(memberController));
router.get('/:code', memberController.getMemberByCode.bind(memberController));
router.post('/', memberController.createMember.bind(memberController));

/**
 * @swagger
 * /api/members:
 *   get:
 *     summary: Get all members
 *     description: Retrieve a list of all members.
 *     responses:
 *       '200':
 *         description: A JSON array of member objects.
 *   post:
 *     summary: Create a new member
 *     description: Create a new member with the provided data.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       '201':
 *         description: The created member object.
 * 
 * /api/members/{code}:
 *   get:
 *     summary: Get member by code
 *     description: Retrieve a member by its unique code.
 *     parameters:
 *       - in: path
 *         name: code
 *         description: Member code
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       '200':
 *         description: A member object.
 *       '404':
 *         description: Member not found.
 */

module.exports = router;
