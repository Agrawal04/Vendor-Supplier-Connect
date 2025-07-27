const express = require('express');
const router = express.Router();
const vendorController = require('../controllers/vendorController');

router.get('/register', vendorController.showRegister);
router.post('/register', vendorController.register);
router.get('/login', vendorController.showLogin);
router.post('/login', vendorController.login);

module.exports = router;
