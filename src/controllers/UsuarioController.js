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

    async login(req, res) {
        /* Login sem verificação de cadastro */
        const nome = req.body.nome
        res.redirect(`/balanco/${nome.replace(' ','_')}`)
    },

    async open(req, res) {
        const db = await Database()

        const name = req.params.user_id

        const registros = await db.all(`SELECT * FROM registro ORDER BY data_criacao`)

        const registros_ativos = await db.all(`SELECT SUM(valor) FROM registro WHERE tipo_saldo = 1`)
        const registros_passivos = await db.all(`SELECT SUM(valor) FROM registro WHERE tipo_saldo = 2`)

        const saldo = registros_ativos[0]['SUM(valor)'] - registros_passivos[0]['SUM(valor)']

        console.log(saldo)
            


        res.render("balanco", {username: name, registros: registros, saldo: saldo})
    }
}