// required links and modules
const express = require("express");
const routes = require("./routes");
const sequelize = require("./config/connection");
const path = require("path");
const mysql = require("mysql2");
const dotenv = require("dotenv");

const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

// turn on routes
app.use(routes);
app.use(express.static(path.join(__dirname, 'public')));

// connect to JawsDB

var connection = mysql.createConnection(process.env.JAWSDB_URL);

connection.connect();

connection.query('SELECT 1 + 1 AS solution', function(err, rows, fields) {
  if (err) throw err;

  console.log('The solution is: ', rows[0].solution);
});

connection.end();
// connect to db and server
// sequelize.sync({ force: false })
// .then(() => { 
//     app.listen(PORT, () => console.log("Now listening on PORT 3001!"));
// });

