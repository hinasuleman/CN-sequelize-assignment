require("dotenv").config();
const {Sequelize} = require("sequelize");
console.log (process.env.MYSQL_URI)
const sequelize = new Sequelize(process.env.MYSQL_URI, {
    dialect: "mysql"
});

module.exports = sequelize