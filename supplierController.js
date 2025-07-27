const db = require('../models/db');

exports.showRegisterForm = (req, res) => {
  res.render('registerSupplier');
};

exports.showLoginForm = (req, res) => {
    res.render('loginSupplier');  // Make sure this file exists in views/
};

exports.registerSupplier = (req, res) => {
  const { name, email, password } = req.body;
  const query = 'INSERT INTO suppliers (name, email, password) VALUES (?, ?, ?)';
  db.query(query, [name, email, password], (err, result) => {
    if (err) return res.send('Error registering supplier');
    res.redirect('/supplier/login');
  });
};

exports.loginSupplier = (req, res) => {
    // dummy login logic
    const { email, password } = req.body;
    if (email === "test@example.com" && password === "1234") {
        res.send("Login successful");
    } else {
        res.send("Invalid credentials");
    }
};

exports.dashboard = (req, res) => {
    res.render('supplierDashboard', {
        supplier: { name: "Test Supplier" }, // mock data
        items: [
            { name: 'Onion', price: 20 },
            { name: 'Tomato', price: 30 }
        ]
    });
};