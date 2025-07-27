const db = require('./db');

const Item = {
  create: (data, callback) => {
    const query = 'INSERT INTO items (supplier_id, name, price) VALUES (?, ?, ?)';
    db.query(query, [data.supplier_id, data.name, data.price], callback);
  },

  findAllWithSuppliers: (callback) => {
    const query = `
      SELECT suppliers.name AS supplier_name, items.name AS item_name, items.price 
      FROM items 
      JOIN suppliers ON items.supplier_id = suppliers.id
    `;
    db.query(query, callback);
  }
};

module.exports = Item;
