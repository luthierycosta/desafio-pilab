import Modal from './modal.js'

const modal = Modal()

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