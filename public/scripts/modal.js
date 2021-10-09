export default function Modal() {
    const open = (id) => {
        document.querySelector(`.modal-wrapper#${id}`).classList.add("active")
    }
    const close = (id) => {
        document.querySelector(`.modal-wrapper#${id}`).classList.remove("active")
    }
    return {open, close}
}