const Sequelize = require('sequelize')

const sequelize = new Sequelize('testdb', 'root', '', {
  dialect: 'mysql',
  host: '127.0.0.1',
  operatorsAliases: false
});

module.exports = sequelize