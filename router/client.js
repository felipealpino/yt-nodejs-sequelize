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
router.post('/new', (req, res) => {
    console.log(req.body)
    console.log(Client)
    Client.build(req.body)
    console.log('User successfully added !!')
    res.redirect('/')
})

router.get('/welcome', (req, res) => {
    res.send('Client page Welcome')
})


module.exports = router