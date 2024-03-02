const http = require('http')

/*
    localhost
    127.0.0.1
    3000

    DNS //domain name serveces

    www.google.com
                    //porta                            
    100.100.100.100:3000

    20-21 - FTP
    22 - SSH
*/

const server = http.createServer((req, res) => {
    console.log('respota do servidor')
})

server.listen(3000, 'localhost', () => {
    console.log('Servidor iniciado.')
})