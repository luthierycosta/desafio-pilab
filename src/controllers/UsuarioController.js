const Database = require("../db/config")

module.exports = {
    async create(req, res) {
        const db = await Database()

        const nome = req.body.novo_nome
        const senha = req.body.nova_senha

        const query = await db.all(`SELECT nome FROM usuario`)
        
        /* se achou nome idêntico a um já cadastrado, pula cadastro*/
        if (query.some(_nome => _nome == nome)) {
            await db.close()
            res.redirect('/')
        } else {      
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
    },

    open(req, res) {
        const name = req.params.user_id
        res.render("balanco", {username: name})
    }
}