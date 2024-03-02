const http = require('http')
const fs = require('fs')

const server = http.createServer((req, res) => {
    
    // header
    res.setHeader('Content-Type', 'text/html')

    // preparar o conteudo de HTML  
    fs.readFile('./html/pagina1.html', (err, data)=>{
        if(err){
            console.log('Erro!')
            res.write('erro!')
            res.end()
        }else{
            res.write(data)
            res.end()
        }
    })
})

server.listen(3000, 'localhost', () => {
    console.log('Servidor iniciado.')
})

