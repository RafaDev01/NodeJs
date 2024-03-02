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
    connection.query('SELECT * FROM users WHERE id =? AND username = ?', [1,'joao'], (error, results)=> {
        if(error){
            res.send(error.sqlMessage)
        }

        if(results.length != 0){
            let html = '<ul>';
                results.forEach(row => {
                    html += '<li>' + row.username + '</li>'
                });
            html += '</ul>'
            res.send(html)

            //res.results
            //res.send(results[0].username + " " + results[0].create_at)
        }else{
            res.send('Não existem resultados')
        }
    })
})