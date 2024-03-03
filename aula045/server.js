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
    res.json(api_response('success', 'Sucesso', []))
})



app.get("/users/:id", (req, res)=> {
    let id = req.params.id
    
    connection.query('SELECT * FROM users WHERE id = ?',
         [id], (err, results) => {
            if(err){
                res.json(api_response('erro', err.sqlMessage, []))
            }else{
                res.json(api_response('success', 'Sucesso', results))
            }
         })
})

function api_response(status, message, data)
{
    return {
        status: status,
        message: message,
        results: data
    }
}