const express = require('express');
const router = express.Router();
const authController = require('../controller/authController');
const userController = require('../controller/userController');
const transferController = require('../controller/transferController');
const auth = require('../middleware/auth');

router.post('/auth/login', authController.login);

router.get('/users', auth, userController.getAll);
router.get('/users/:id', auth, userController.getById);
router.post('/users', userController.create);

router.get('/transfers', auth, transferController.getAll);
router.post('/transfers', auth, transferController.create);
router.get('/transfers/user/:userId', auth, transferController.getByUser);

module.exports = router;
