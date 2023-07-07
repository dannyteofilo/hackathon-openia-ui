const express = require('express');
const router = express.Router();

const mainController = require('../controllers/openai.controller');

// Rutas
router.post('/sendToChatGPT', mainController.sendToChatGPT);
router.post('/generateImg', mainController.generateImg);

module.exports = router;
