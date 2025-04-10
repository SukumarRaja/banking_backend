const { Sequelize } = require('sequelize');
require('dotenv').config(); // Load environment variables

const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASS, {
  host: process.env.DB_HOST,
  dialect: 'mysql',
});

sequelize
  .authenticate()
  .then(() => console.log('Database connected'))
  .catch((error) => console.log('Error connecting to database:', error));

module.exports = sequelize;
