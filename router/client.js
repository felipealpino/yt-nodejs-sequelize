const express = require('express')

const db = require('../models')
const {Client} = require('../models')
const router = express.Router();

//onde '/client/' é do prefix /clients

/**
 * API CONTROL  
*/ 
router.get('/', async (req, res) => {
    const dados = await Client.findAll()
    res.send(dados)
})
router.get('/:id', async (req, res) => {
    const dados = await Client.findAll({
        where: {id:req.params.id}
    })
    res.send(dados);
})
router.post('/', async(req, res) => {
    const dados = await Client.create(req.body)
    res.send(dados);
})
router.delete('/:id', async(req, res) => {
    const dados = Client.destroy({
        where: {
            id: req.params.id
        }
    })
})



/**
 * CRUD CONTROL
 */
router.get('/new', (req, res) => {
    res.render('formClient')
})
router.post('/new', async (req, res) => {
    const dados = await Client.create(req.body)
    console.log('User successfully added !!')
    res.redirect('/client/list')
})


router.get('/list', async (req,res) => {
    const dados = await Client.findAll()
    res.render('listClients', {dados:dados})
})


router.get('/edit/:id', async (req, res) => {
    const dados = await Client.findAll({
        where: {id:req.params.id}
    })
    res.render('editFormClient', {dados:dados})
})
router.post('/edit/:id', async(req,res) => {
    const dados = await Client.update(req.body, {
        where: {id: req.params.id}
    });

    console.log("Client data updated successfully !! ;)")
    res.redirect('/client/list')
})


router.get('/delete/:id', async (req, res) => {
    await Client.destroy({
        where: {
            id: req.params.id
        }
    })
    console.log("Cliente id: "+req.params.id+" was deleted")
    res.redirect('/client/list')
})






module.exports = router