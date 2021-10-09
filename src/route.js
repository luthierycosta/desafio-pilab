const express = require('express')
const RegistroController = require('./controllers/RegistroController')
const route = express.Router()

route.get('/', (req, res) => res.render("index"))
route.get('/cadastrar', (req, res) => res.render("cadastrar"))
route.get('/balanco', (req, res) => res.render("balanco"))

route.post('/balanco/:tipo_saldo', RegistroController.index)




module.exports = route