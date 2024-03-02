const http = require('http')

const server = http.createServer((req, res) =>{
    //header
    res.setHeader('Content-type', 'text/html')

    res.write('<h1>Pedido aceito</h1>')
    res.write('<h2>Pedido aceito</h2>')
    res.write('<h3>Pedido aceito</h3>')
    res.write('<h4>Pedido aceito</h4>')
    res.end()
})

server.listen(3000, 'localhost', ()=>{
    console.log('Servidor iniciado...')
})