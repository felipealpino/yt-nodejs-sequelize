const express = require('express')
const home = require('./router/home')
const clients = require('./router/client')
const bodyParser = require('body-parser')


//ROTAS -- Configurações de endpoints
const app = express();

app.use(express.json()) //body-parser (old library)
app.use(express.urlencoded({extended:true}))

app.use('/', home)
app.use('/client', clients)

module.exports = app;  