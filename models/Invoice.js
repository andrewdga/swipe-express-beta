// models/Invoice.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Invoice extends Model {}

Invoice.init({
  account_id: DataTypes.BIGINT,
  due_at: DataTypes.DATE,
  total_amount: DataTypes.FLOAT
}, {
  sequelize,
  modelName: 'Invoice',
  timestamps: true
});

module.exports = Invoice;
