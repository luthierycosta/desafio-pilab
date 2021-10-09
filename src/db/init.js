const Database = require("./config.js")

const initDb = {
    async init(){
        const db = await Database()
        
        await db.exec(`
            CREATE TABLE usuario (
                id      INTEGER PRIMARY KEY AUTOINCREMENT,
                email   TEXT,
                nome    TEXT,
                senha   TEXT
            )`);
            
        await db.exec(`
            CREATE TABLE registro (
                id          INTEGER PRIMARY KEY AUTOINCREMENT,
                data_criacao TEXT,
                valor       INTEGER,
                descricao   TEXT,
                tipo_saldo  INTEGER
            )`);
   
        await db.close();
    }
}

initDb.init();