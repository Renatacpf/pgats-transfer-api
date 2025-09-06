
const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const userController = require('../controller/userController');
const transferController = require('../controller/transferController');
const auth = require('../middleware/auth');

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Autentica usuário e retorna JWT
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Token JWT
 */
router.post('/auth/login', authController.login);

/**
 * @swagger
 * /users:
 *   get:
 *     summary: Lista todos os usuários
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de usuários
 */
router.get('/users', auth, userController.getAll);

/**
 * @swagger
 * /users/{id}:
 *   get:
 *     summary: Busca usuário por ID
 *     tags: [User]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Usuário encontrado
 *       404:
 *         description: Usuário não encontrado
 */
router.get('/users/:id', auth, userController.getById);

/**
 * @swagger
 * /users:
 *   post:
 *     summary: Cria novo usuário
 *     tags: [User]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               username:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       201:
 *         description: Usuário criado
 */
router.post('/users', userController.create);

/**
 * @swagger
 * /transfers:
 *   get:
 *     summary: Lista todas as transferências
 *     tags: [Transfer]
 *     security:
 *       - bearerAuth: []
 *     responses:
 *       200:
 *         description: Lista de transferências
 */
router.get('/transfers', auth, transferController.getAll);

/**
 * @swagger
 * /transfers:
 *   post:
 *     summary: Cria nova transferência
 *     tags: [Transfer]
 *     security:
 *       - bearerAuth: []
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               to:
 *                 type: integer
 *               amount:
 *                 type: number
 *     responses:
 *       201:
 *         description: Transferência criada
 */
router.post('/transfers', auth, transferController.create);

/**
 * @swagger
 * /transfers/user/{userId}:
 *   get:
 *     summary: Lista transferências de um usuário
 *     tags: [Transfer]
 *     security:
 *       - bearerAuth: []
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Lista de transferências do usuário
 */
router.get('/transfers/user/:userId', auth, transferController.getByUser);

module.exports = router;
