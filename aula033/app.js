const express = require('express');
const app = express();
app.listen(3000);

//routes
app.all('/teste', (req, res, next)=> {
    console.log('teste aqui');
    next()
})

app.get('/', (req, res)=> {
    res.write('home')
    res.send()
})


app.get('/a-*-x', (req, res)=> {
    res.send('lol')
})
