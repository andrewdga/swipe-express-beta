// models/database.js
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('swipe-express-beta', 'username', 'password', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false // You can set it to true for debugging
});

module.exports = sequelize;
