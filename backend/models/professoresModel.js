//Professores.js
const sqlite3 = require('sqlite3').verbose();
const dbPath = './database.db';
// Função para abrir conexão com o banco de dados
function openDbConnection() {
    let db = new sqlite3.Database(dbPath, sqlite3.OPEN_READWRITE, (err) => {
        if (err) {
            console.error('Erro ao abrir o banco de dados:', err.message);
        }
    });
    return db;
}
// Função para buscar todos os clientes
function getAllProfessor(callback) {
    const db = openDbConnection();
    db.all("SELECT * FROM Professor", [], (err, rows) => {
        db.close();
        callback(err, rows);
    });
}

module.exports = {
    getAllProfessor,
};
