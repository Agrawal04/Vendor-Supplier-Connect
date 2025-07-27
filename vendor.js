const db = require('./db');

const Vendor = {
  create: (data, callback) => {
    const query = 'INSERT INTO vendors (name, email, password) VALUES (?, ?, ?)';
    db.query(query, [data.name, data.email, data.password], callback);
  }
};

module.exports = Vendor;
