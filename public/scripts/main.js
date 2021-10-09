import Modal from './modal.js'

// Recupera nome do usuário na tela do balanço
document.querySelector('#username').innerHTML = 'Olá, fulano'

const modal = Modal()

// Evento de cadastrar uma nova entrada
const form_entrada = document.querySelector('.modal-wrapper#entrada form')
form_entrada.setAttribute('action', `/novo_registro/123/entrada/`)

// Evento de cadastrar uma nova saída
const form_saida = document.querySelector('.modal-wrapper#saida form')
form_saida.setAttribute('action', `/novo_registro/123/saida/`)


const open_buttons = document.querySelectorAll('.button.action-open')
const cancel_buttons = document.querySelectorAll('.button.action-cancel')

open_buttons.forEach(button => {
    button.addEventListener('click', event => {
        modal.open(button.classList[2])
    })
}) 

cancel_buttons.forEach(button => {
    button.addEventListener('click', event => {
        modal.close(button.classList[3])
    })
}) 