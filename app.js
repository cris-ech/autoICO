const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const path = require('path');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
require('dotenv').config();


const users = require("./routes/users");
//const User = require('./models/User');
const withAuth = require('./middleware');


const app = express();

app.use(cookieParser());


// Bodyparser middleware
app.use(
  bodyParser.urlencoded({
    extended: false
  })
);
app.use(bodyParser.json());

// Set up mongoose connection

var dev_db_url = process.env.DB_URL;
var mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, {useNewUrlParser: true}, function(err) {
  if (err) {
    throw err;
  } else {
    console.log(`Successfully connected to ${mongoDB}`);
  }
});

// Routes
app.use("/users", users);

app.get('/checkToken', withAuth, function(req, res) {
  res.sendStatus(200);
});
app.get('/api/home', function(req, res) {
  res.send('Welcome!');
});
app.get('/api/secret', withAuth, function(req, res) {
  res.send('The password is potato');
});


app.listen(process.env.PORT || 8080, () => {
  console.log('Server is up and running on port numner ' + (process.env.PORT || 8080));
});
