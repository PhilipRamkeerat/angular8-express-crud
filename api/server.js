const express = require('express'),
  path = require('path'),
  bodyParser = require('body-parser'),
  cors = require('cors'),
  mongoose = require('mongoose'),
  // Added config DB
  config = require('./DB');

mongoose.Promise = global.Promise;
mongoose.connect(config.DB, { useNewUrlParser: true }).then(
  () => {
    console.log("Database connected");
  },
  err => {
    console.log('Cant connect to the database' + err)
  }
);


const app = express();
app.use(bodyParser.json());
app.use(cors());
let port = process.env.PORT || 4000;

const server = app.listen(function () {
  console.log('Listening on port ' + port);
});