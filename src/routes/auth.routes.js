const express = require('express');
const router = express.Router();

const authController = require('../controllers/auth.controller');

router.post('/log-in', authController.login);
router.post('/sign-in', authController.saveUser);

module.exports = router;
