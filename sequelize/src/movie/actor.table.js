const {DataTypes} = require("sequelize");
const sequelize = require("../db/connection");

const Actor = sequelize.define('Actor', {
    name: {
        type:DataTypes.STRING,
        allowNull: false,
        unique: true,
    },
   
});

module.exports = Actor;
