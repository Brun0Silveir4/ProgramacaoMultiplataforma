const express = require('express')
const app = express()
const handlebars = require('express-handlebars').engine
const bodyParser = require('body-parser')
const post = require('./models/post')

app.engine("handlebars", handlebars({defautLayout: 'main'}))
app.set("view engine", "handlebars")


app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())

app.get('/', (req, res) => {
    res.render('cadastrar')
})

app.post('/cadastrar', (req, res) => {
    post.create({
        nome: req.body.nome,
        telefone: req.body.telefone,
        origem: req.body.origem,
        data_contato: req.body.data_contato,
        observacao: req.body.observacao
    }).then(()=> {
        res.redirect('/')
    }).catch((e) => {
        res.send(`Erro ao salvar arquivos: ${e}`)
    })
})

app.get('/consulta', (req, res) => {
    res.render('consultar')
})

app.listen(8081, () => {
    console.log('Servidor ativo e rodando')
})