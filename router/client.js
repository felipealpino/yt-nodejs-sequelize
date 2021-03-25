const express = require('express')

const db = require('../models')
const {Client} = require('../models')
const router = express.Router();

//onde '/' é do prefix /clients
router.get('/', (req, res) => {
    res.send('Client page')
})

router.get('/new', (req, res) => {
    res.render('formClient')
})

router.get('/list', async (req,res) => {
    const dados = await Client.findAll()
    res.render('listClients',{
        dados:dados
    })
})

router.post('/new', async (req, res) => {
    console.log(req.body)
    const dados = await Client.create(req.body)
    console.log(dados)
    console.log('User successfully added !!')
    res.redirect('/')
})



module.exports = router