const Sequelize = require('sequelize');


module.exports = function(sequelize, DataTypes) {
    var Burgers = sequelize.define('Burgers', {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            autoIncrement: true,
            primaryKey: true
        },
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            len: [1]
        }, 
        devoured: {
            type: DataTypes.BOOLEAN,
            allowNull: false,
        }
    })
    return Burgers
};