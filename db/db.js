var mysql = require('mysql2');

var con = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "123123",
    database: "blog"
  });
  
  con.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
  });

  module.exports = con;