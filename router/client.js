const express = require('express')


const router = express.Router();
//onde '/' é do prefix /clients
router.get('/', (req, res) => {
    res.send('Client page')
})
router.get('/welcome', (req, res) => {
    res.send('Client page Welcome')
})


module.exports = router