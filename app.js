const express = require('express')
const home = require('./router/home')
const clients = require('./router/client')

//Configurações de endpoints
const app = express();
app.use('/', home)
app.use('/client', clients)

module.exports = app;  