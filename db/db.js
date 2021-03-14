const Sequelize= require('sequelize')
const db = new Sequelize(process.env.DATABASE_URL || 'postgres://localhost/problems', {
    // logging: false
})
module.exports = db