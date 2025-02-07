const express = require('express');
const { receiveWebhook } = require('../controllers/webhookController');
const validateWebhook = require('../middlewares/webhook.Validator'); 
const verifyApiKey = require('../middlewares/auth'); 
const router = express.Router();

router.post('/webhook', verifyApiKey, validateWebhook, receiveWebhook); 

module.exports = router;
