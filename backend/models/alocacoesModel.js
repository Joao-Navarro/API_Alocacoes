//Alocacao.js
const sqlite3 = require('sqlite3').verbose();
const dbPath = '../database.db';
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
function getAllAlocacao(callback) {
    const db = openDbConnection();
    db.all("SELECT * FROM Alocaçao", [], (err, rows) => {
        db.close();
        callback(err, rows);
    });
}

// Função para buscar um cliente por ID
function getAlocacaoById(id, callback) {
    const db = openDbConnection();
    db.get("SELECT * FROM Alocaçao WHERE id = ?", [id], (err, row) => {
        db.close();
        callback(err, row);
    });
}
// Função para criar um novo cliente
function createAlocacao(Alocacao, callback) {
    const { id, idprof, idsala, periodo } = Alocacao;
    const db = openDbConnection();
    db.run("INSERT INTO Alocaçao (id, idprof,idsala, periodo) VALUES (?, ?, ?, ?)", [id,
        idprof, idsala, periodo], function (err) {
            db.close();
            callback(err, { id: this.lastID });
        });
}
// Função para atualizar um cliente existente
function updateAlocacao(id, idprof, idsala, periodo) {
    const { id, idprof, idsala, periodo } = Alocacao;
    const db = openDbConnection();
    db.run("UPDATE Alocaçao SET id = ?, idprof = ?, idsala = ?, periodo = ?  WHERE id = ?",
        [id, idprof, idsala, periodo], function (err) {
            db.close();
            callback(err, { changes: this.changes });
        });
}
// Função para deletar um cliente
function deleteAlocacao(id, callback) {
    const db = openDbConnection();
    db.run("DELETE FROM Alocaçao WHERE id = ?", [id], function (err) {
        db.close();
        callback(err, { changes: this.changes });
    });
}
module.exports = {
    getAllAlocacao,
    getAlocacaoById,
    createAlocacao,
    updateAlocacao,
    deleteAlocacao,
};
