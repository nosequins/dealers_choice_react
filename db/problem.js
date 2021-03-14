const {Sequelize, DataTypes} = require('sequelize')
const db = require('./db')

const Problem=db.define('problem',{
    author: DataTypes.STRING
    ,
    name: DataTypes.STRING,
    description:{
        type: DataTypes.TEXT,
        allowNull: false,
        validate:{ 
            notEmpty: true}
    },
    year: DataTypes.INTEGER,
    visual: DataTypes.TEXT

})
module.exports= Problem