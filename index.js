// required links and modules
const express = require("express");
const routes = require("./routes");
const sequelize = require("./config/connection");
const path = require("path");
const mysql = require("mysql2");
const dotenv = require("dotenv");

const app = express();
const PORT = process.env.PORT // || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended:true }));

// turn on routes
app.use(routes);
app.use(express.static(path.join(__dirname, 'public')));

// connect to JawsDB

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

  
// connect to db and server
// sequelize.sync({ force: false })
// .then(() => { 
//     app.listen(PORT, () => console.log("Now listening on PORT 3001!"));
// });

