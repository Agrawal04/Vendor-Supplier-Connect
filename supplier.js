const db = require('./db');

// Define supplier model logic (optional functions)
const Supplier = {
  create: (data, callback) => {
    const query = 'INSERT INTO suppliers (name, email, password) VALUES (?, ?, ?)';
    db.query(query, [data.name, data.email, data.password], callback);
  },

  findAll: (callback) => {
    db.query('SELECT * FROM suppliers', callback);
  }
};

module.exports = Supplier;
