const express = require('express');
const router = express.Router();
const supplierController = require('../controllers/supplierController');

// Supplier registration route
router.get('/register', supplierController.showRegisterForm);
router.post('/register', supplierController.registerSupplier);

// Supplier login route
router.get('/login', supplierController.showLoginForm);
router.post('/login', supplierController.loginSupplier);

// Supplier dashboard
router.get('/dashboard', supplierController.supplierDashboard);

module.exports = router;
