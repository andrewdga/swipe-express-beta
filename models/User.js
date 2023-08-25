// models/User.js
const { Model, DataTypes } = require('sequelize');
const sequelize = require('../database');

class User extends Model {}

User.init({
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    unique: true
  },
  encrypted_password: {
    type: DataTypes.STRING,
    allowNull: false
  },
  reset_password_token: DataTypes.STRING,
  reset_password_sent_at: DataTypes.DATE,
  remember_created_at: DataTypes.DATE
}, {
  sequelize,
  modelName: 'User',
  timestamps: true
});

module.exports = User;
