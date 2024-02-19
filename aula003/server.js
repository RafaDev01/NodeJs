//incorporando o modulo http
const server = require('http')

//a arrow funcion emite a resposta do server, e a resposta
server.createServer((request, response) => {
    response.end('Teste dois')
}).listen(3000)