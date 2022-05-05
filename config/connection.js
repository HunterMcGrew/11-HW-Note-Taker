const Sequelize = require('sequelize');
const mysql = require("mysql2");
require('dotenv').config();

const con = mysql.createConnection({
    host: 'z3iruaadbwo0iyfp.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'x9xf03tfmt5iazlz',
    password: 'a8k6osm41yh66ts3',
    database: 'bn5c30bij4te4org'
  });
  
  con.connect((err) => {
    if(err){
      console.log('Error connecting to Db');
      return;
    }
    console.log('Connection established');
  });
  
  con.end((err) => {
    // The connection is terminated gracefully
    // Ensures all remaining queries are executed
    // Then sends a quit packet to the MySQL server.
  });

// const sequelize = new Sequelize(
//     //DB name
//     process.env.JAWSDB_URL,
//     // process.env.DB_NAME,
//     // process.env.DB_USER,
//     // process.env.DB_PASS,
//     {
//         // host: "localhost",
//         dialect: "mysql",
//         // port: 3306
//     });

module.exports = sequelize;