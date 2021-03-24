const express = require('express')


const router = express.Router();
router.get('/', (req, res) => {
    res.send('Hello world!')
})


//ROTA PARA TESTAR NO POSTMAN -- http://localhost:7777/body
router.post('/body', (req, res) => {
    res.json(req.body)
})

module.exports = router

