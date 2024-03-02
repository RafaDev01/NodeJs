const express = require('express')
const server = express()

server.get('/', (req, res) => {
    res.send('Ola expressJS ddasdas!')
})

server.listen(3000, 'localhost', ()=> {
    console.log('Servidor iniciado')
})