const express = require('express');
const bodyParser = require('body-parser');
const config = require('./config/db');
const mysql = require('mysql');
var cors = require('cors')

var connection = mysql.createConnection(config);

const app = express();
const port = 9323;

app.use(cors())
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json())

//Connecting to database
connection.connect(err => {
  if (err) return console.log(err);

  require('./routes')(app, connection);
  app.listen(port, () => {
    console.log("We are live on port " + port);

  })
})