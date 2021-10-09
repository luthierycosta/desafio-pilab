const express = require('express')
const path = require('path')
const route = require('./route')

const server = express()

server.set('view engine', 'ejs')
server.set('views', path.join(__dirname, 'views'))

server.use(express.static("public"))

server.use(express.urlencoded({extended: true}))

server.use(route)

server.listen(3000, () => console.log("RODANDO"))