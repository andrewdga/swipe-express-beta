// models/Transaction.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Transaction extends Model {}

Transaction.init({
  account_id: DataTypes.BIGINT,
  invoice_id: DataTypes.BIGINT,
  amount: DataTypes.FLOAT,
  status: DataTypes.STRING,
  description: DataTypes.STRING
}, {
  sequelize,
  modelName: 'Transaction',
  timestamps: true
});

module.exports = Transaction;
