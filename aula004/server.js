const http = require('http')
const host = "127.0.0.1"
const port = 3000

const server = http.createServer((req, res) => {

    res.setHeader("Content-Type", "text/plain; charset=utf-8")

    if(req.url == "/"){
        res.end('Pagina inicial do nosso website')
    } else if(req.url == "/new"){
        res.end('Pagina nova do website')
    } else if(req.url == "/contact"){
        res.end('Pagina de contatos do nosso website')
    } else{
        res.end('Página desconhecida.')
    }
})

server.listen(port, host, () => {
    console.log('Novo servidor em função')
})