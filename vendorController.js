// const Vendor = require('../models/vendor');

// exports.registerVendor = (req, res) => {
//   const { name, email, password } = req.body;
//   Vendor.create({ name, email, password }, (err) => {
//     if (err) return res.send('Error registering vendor');
//     res.redirect('/vendor/dashboard');
//   });
// };

// exports.showVendorDashboard = (req, res) => {
//   const Item = require('../models/item');
//   Item.getAllWithSuppliers((err, results) => {
//     if (err) return res.send('Error loading items');
//     res.render('vendorDashboard', { items: results });
//   });
// };

const Supplier = require('../models/supplier');
const Item = require('../models/item');

exports.showRegister = (req, res) => res.render('registerSupplier');
exports.showLogin = (req, res) => res.render('loginSupplier');

exports.register = (req, res) => {
    const { name, email, password } = req.body;
    Supplier.create({ name, email, password }, err => {
        if (err) return res.send('Error during registration');
        res.redirect('/supplier/login');
    });
};

exports.login = (req, res) => {
    const { email, password } = req.body;
    Supplier.findByEmail(email, (err, results) => {
        if (err || results.length === 0 || results[0].password !== password)
            return res.send('Invalid credentials');
        res.render('supplierDashboard', { supplierId: results[0].id });
    });
};

exports.uploadItem = (req, res) => {
    const { item_name, price, supplier_id } = req.body;
    Item.addItem({ item_name, price, supplier_id }, err => {
        if (err) return res.send('Error adding item');
        res.redirect('/supplier/dashboard');
    });
};


