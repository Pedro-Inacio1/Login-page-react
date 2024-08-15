const express = require('express');
const app = express();
const morgan = require('morgan')
const bodyParser = require('body-parser');

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')

const LoginController = require('./Controllers/LoginController');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.json())

app.use((req, res, next) => {
    res.header('Acess-Control-Allow-Origin', '*');
    res.header('Acess-Control-Allow-Header', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');

    if (req.method === 'OPTIONS') {
        res.header('Acess-Control-Allow-Methods', 'GET, POST, PUT, PATCH, DELETE');
        return (res.status(200))
    }

    next();
})

app.use(morgan('dev'));

const user = {
    email: String,
    password: String
} 

app.post('/Register', LoginController.Registration)
app.get('/GetUser', LoginController.User)

module.exports = app;