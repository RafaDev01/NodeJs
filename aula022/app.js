const express = require('express')
var morgan = require('morgan')

//cria uma aplicação express
const app = express()

//registrar o template engine (view engine)
app.set('view engine', 'ejs')
//app.set('views', 'visual')

//----------------------------------------------------
// middleware
app.use(express.static('public'))

app.use(morgan('dev'))
app.use(morgan('O método é: :method'))

//escutar os requests
app.listen(3000)

//--------------------------------------------------
//routes
app.get('/', (req, res)=>{
    //res.send('<h1>Teste</h1>')
    res.render('home', { title: 'Home ejs' })
})

app.get('/about', (req, res)=>{
    res.render('about', { title: 'acerca-de' })
})

app.get('/contatos', (req, res)=>{
    const servicos = [
        { titulo_servico: "Desenvolvimento Web", descricao: "Desenvolvemos págins e apps" },
        { titulo_servico: "Desenvolvimento desktop", descricao: "Desenvolvemos aplicações desktop" },
        { titulo_servico: "Desenvolvimento mobile", descricao: "Desenvolvemos apps mobile para android e ios" }
    ]

    res.render('contatos', { title: 'contatos', servicos })
})

app.get('/acerca-de', (req, res)=> {
    res.render('about', { title: 'acerca-de' })
})

app.use((req, res) => {
    //res.sendFile('./views/404.html', { root: __dirname})
    res.status(404)
        .render('404', { title: '404' })
})