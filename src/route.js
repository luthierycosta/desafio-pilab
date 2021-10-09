const express = require('express')
const RegistroController = require('./controllers/RegistroController')
const UsuarioController = require('./controllers/UsuarioController')
const route = express.Router()

route.get('/', (req, res) => res.render("index"))
route.get('/cadastrar', (req, res) => res.render("cadastrar"))
route.get('/balanco/:user_id', (req, res) => res.render("balanco"))

route.post('/novo_registro/:user_id/:tipo_saldo', RegistroController.index)
route.post('/novo-cadastro', UsuarioController.create)



module.exports = route