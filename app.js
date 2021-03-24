const express = require('express')
const home = require('./router/home')
const clients = require('./router/client')
const mustache = require('mustache-express')

//ROTAS -- Configurações de endpoints
const app = express();

app.use('/assets', express.static('./assets'))

app.use(express.json()) //body-parser (old library)
app.use(express.urlencoded({extended:true}))

app.use('/', home)
app.use('/client', clients)

// app.set('view engine', 'pug');
// app.set('views', __dirname+'/views') // __dirname = diretório absoluto

app.engine('mst', mustache()) // extensão do arquivo, rodar a varaivel como função
app.set('view engine', 'mst');
app.set('views', __dirname+'/views') // __dirname = diretório absoluto
module.exports = app;  