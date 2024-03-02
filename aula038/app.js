const express = require('express')
const app = express();
app.listen(3000)

//routes com parametros
app.get('/', (req, res)=> {
    res.send('Ola mundo')
})

// clientes 
/*
> mostrar os dados de um cliete
> mostrar todos os nomes dos cliente
...
*/ 

app.get("/clientes/:loja-:cidade", (req, res)=> {
    let lojas = [
        'Rua A',
        'Rua B',
        'Rua C',
        'Rua D',
        'Rua E',
    ]

    res.send(`A loja escolhida foi a da cidade: ${req.params.cidade}, a loja na ${lojas[req.params.loja]}`)
})

app.get('/clientes/:id_cliente', (req, res) => {
    //res.send(req.params)
    res.send(`O cliente selecionado foi o ${req.params.id_cliente}`)
})

app.get("/clientes/:id/comentarios/:id_comentario", (req, res) => {
    res.send(req.params)
})

app.get("/adicao/:valor1/:valor2", (req, res) => {
    res.send(`A adição dos valores é: ${+req.params.valor1 * +req.params.valor2}`)
})