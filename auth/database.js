const { Sequelize } = require('sequelize');

const sequelize = new Sequelize("0.0.0.0:5432", {
  dialect: 'postgres',
  logging: false,
});

sequelize
  .authenticate()
  .then(() => console.log('Connection has been established successfully.'))
  .catch(error => console.error('Unable to connect to the database:', error));

module.exports = sequelize;
