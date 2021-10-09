const Database = require("./config")

const initDb = {
    async init() {
        const db = await Database()

        await db.exec(`CREATE TABLE usuario (
                id      INTEGER PRIMARY KEY AUTOINCREMENT,
                email   TEXT,
                nome    TEXT,
                senha   TEXT
            )`);
            
        await db.exec(`CREATE TABLE registro (
                id          INTEGER PRIMARY KEY AUTOINCREMENT,
                data        TEXT,
                valor       INTEGER,
                descricao   TEXT,
                usuario     INTEGER, 
                pai         INTEGER,
                FOREIGN KEY (usuario) REFERENCES usuario (id)
            )`);

        await db.close()
    }
}
initDb.init()