// models/Account.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class Account extends Model {}

Account.init({
  user_id: {
    type: DataTypes.BIGINT,
    allowNull: false
  },
  account_type: DataTypes.STRING
}, {
  sequelize,
  modelName: 'Account',
  timestamps: true
});

module.exports = Account;
