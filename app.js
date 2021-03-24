const express = require('express')
const router = require('./router/index')

//Configurações
const app = express();
app.use('/', router)

module.exports = app;  