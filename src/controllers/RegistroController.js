const Database = require("../db/config")

module.exports = {
    index (req, res) {
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
    },

    async create(req, res) {
        const db = await Database()

        const tipo_saldo = req.params.tipo_saldo == 'entrada' ? 1 : 2

        const data = req.body.data
        const valor = req.body.valor
        const descricao = req.body.descricao

        await db.run(`
            INSERT INTO registro (
                data_criacao,
                valor,
                descricao,
                tipo_saldo
            ) VALUES (
                '${data}',
                ${valor},
                '${descricao}',
                ${tipo_saldo}
            )
        `)

        await db.close()
        res.redirect("/")
    }
        
}