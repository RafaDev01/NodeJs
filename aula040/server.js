// express
const express = require('express')
const app = new express()
app.listen(3000, ()=>{
    console.log('API Running!')
})

// mysql
const mysql = require('mysql')
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root123',
    database: 'blog'
})

//routes 
app.get('/', (req, res) => {
    connection.query("SELECT * FROM users", (erro, resultados) => {
        if(erro){
            console.log(erro.code)
            res.send('erro ' + erro.sqlMessage)
        }
    
        res.send(resultados[0].username)
    })
    
    //res.send('Olá node + MySQL')
})