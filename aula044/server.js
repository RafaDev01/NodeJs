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
})

//routes
app.get('/', (req, res)=> {
    let values = [
        ['0', 'teste10', '2030-10-20 10:30:00'],
        ['0', 'teste11', '2030-10-20 11:30:00'],
        ['0', 'teste12', '2030-10-20 12:30:00'],
        ['0', 'teste13', '2030-10-20 13:30:00'],
        ['0', 'teste14', '2030-10-20 14:30:00']
    ]

    connection.query('INSERT INTO users VALUES ?', [values], (err, results) => {
        if(err){
            res.send('erro' + err.sqlMessage)
        }else{
            res.send('OK!')
        }
    })
})