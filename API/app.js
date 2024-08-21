const express = require('express');
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser');

const LoginController = require('./Controllers/LoginController');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json())

app.use(morgan('dev'));

const user = {
    email: String,
    password: String
} 

app.post('/Register', LoginController.Registration)
app.post('/GetUser', LoginController.User)

module.exports = app;