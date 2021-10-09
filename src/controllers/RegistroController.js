module.exports = {
    index(req, res) {
        const tipo_saldo = req.params.tipo_saldo

        const data = req.body.data
        const valor = req.body.valor
        const descricao = req.body.descricao
        const pai = req.body.pai

        console.log(tipo_saldo)
        console.log(data)
        console.log(valor)
        console.log(descricao)
        console.log(pai)
    }
        
}