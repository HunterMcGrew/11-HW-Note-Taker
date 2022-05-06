const Sequelize = require('sequelize');
const mysql = require("mysql2");
require('dotenv').config();

const sequelize = new Sequelize(
    //DB name
    process.env.JAWSDB_URL,
    {
        dialect: "mysql",
    });

module.exports = sequelize; 