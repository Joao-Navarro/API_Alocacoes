//Salas.js
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
function getAllSalas(callback) {
    const db = openDbConnection();
    db.all("SELECT * FROM Sala", [], (err, rows) => {
        db.close();
        callback(err, rows);
    });
}

// Função para buscar um cliente por ID
function getSalasById(id, callback) {
    const db = openDbConnection();
    db.get("SELECT * FROM Sala WHERE id = ?", [id], (err, row) => {
        db.close();
        callback(err, row);
    });
}
// Função para criar um novo cliente
function createSalas(Salas, callback) {
    const { id, nome, bloco } = Salas;
    const db = openDbConnection();
    db.run("INSERT INTO Sala (id, nome, bloco) VALUES (?, ?, ?, ?)", [id,
        nome, bloco], function (err) {
            db.close();
            callback(err, { id: this.lastID });
        });
}
// Função para atualizar um cliente existente
function updateSalas(id, nome, bloco) {
    const { id, nome, bloco } = Salas;
    const db = openDbConnection();
    db.run("UPDATE Sala SET id = ?, nome = ?, bloco = ? WHERE id = ?",
        [id, nome, bloco], function (err) {
            db.close();
            callback(err, { changes: this.changes });
        });
}
// Função para deletar um cliente
function deleteSalas(id, callback) {
    const db = openDbConnection();
    db.run("DELETE FROM Sala WHERE id = ?", [id], function (err) {
        db.close();
        callback(err, { changes: this.changes });
    });
}
module.exports = {
    getAllSalas,
    getSalasById,
    createSalas,
    updateSalas,
    deleteSalas,
};
