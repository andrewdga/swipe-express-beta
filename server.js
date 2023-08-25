// server.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 4444;
const sequelize = require('./database');

require('./models/associations'); 

// Sync database
sequelize.sync({ alter: true }).then(() => {
  console.log("Database & tables created!");
});


// Test the connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection to the database has been established successfully.');
  })
  .catch(err => {
    console.error('Unable to connect to the database:', err);
  });


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
