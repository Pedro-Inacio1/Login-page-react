const express = require('express');
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser');
const login = require('./Middleware/Login')

const LoginController = require('./Controllers/LoginController');
const HomeController = require('./Controllers/HomeController')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json())

app.use(morgan('dev'));

app.post('/Register', LoginController.Registration)
app.post('/GetUser', LoginController.User)
// app.get('/Products', login ,HomeController.getProducts)

module.exports = app;