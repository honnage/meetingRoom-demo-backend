const Sequelize = require('sequelize')
const dbConfig = require('../config/database')

const connection = new Sequelize(dbConfig)

try {
    connection.authenticate()
    console.log('Connection database successfully')
} catch(error) {
    console.log('unable to connec database', error)

}

module.exports = connection