const Database = require("../db/config")

module.exports = {
    async create(req, res) {
        const db = await Database()

        const nome = req.body.novo_nome
        const senha = req.body.nova_senha

        await db.run(`
            INSERT INTO usuario (
                nome,
                senha
            ) VALUES (
                '${nome}',
                '${senha}'
            )
        `)

        await db.close()
        res.redirect(`/balanco/${nome.replace(' ','_')}`)
    }
}