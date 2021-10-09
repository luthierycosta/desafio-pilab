const express = require('express')
const RegistroController = require('./controllers/RegistroController')
const UsuarioController = require('./controllers/UsuarioController')
const route = express.Router()

route.get('/', (req, res) => res.render("index"))
route.get('/cadastrar', (req, res) => res.render("cadastrar"))
route.get('/balanco/:user_id', UsuarioController.open)

route.post('/login', UsuarioController.login)
route.post('/novo-cadastro', UsuarioController.create)

route.post('/novo_registro/:username/:tipo_saldo', RegistroController.create)



module.exports = route