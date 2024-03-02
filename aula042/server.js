//express
const express = require("express")
const app = new express()
app.listen(3000, () => {
    console.log('Servidor em execução!')
})

//mysql
const mysql = require("mysql")
const connection = mysql.createConnection({
    user: 'user_blog',
    password: 'root1234',
    database: 'blog',
    port: 3306,
    charset: 'utf8mb4',
    stringifyObjects: true
})

//routes
app.get('/', (req, res)=> {
    connection.query('SELECT * FROM users', (erro, results)=> {
        if(erro){
            res.send(erro)
        }

        res.send(results)
    })
    //res.send('OK')
})