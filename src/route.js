const express = require('express')

const route = express.Router()

route.get('/', (req, res) => res.render("index"))
route.get('/cadastrar', (req, res) => res.render("cadastrar"))
route.get('/balanco', (req, res) => res.render("balanco"))

module.exports = route