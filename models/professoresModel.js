//Professores.js
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
function getAllProfessor(callback) {
    const db = openDbConnection();
    db.all("SELECT * FROM Professor", [], (err, rows) => {
        db.close();
        callback(err, rows);
    });
}

// Função para buscar um cliente por ID
function getProfessorById(id, callback) {
    const db = openDbConnection();
    db.get("SELECT * FROM Professor WHERE id = ?", [id], (err, row) => {
        db.close();
        callback(err, row);
    });
}
// Função para criar um novo cliente
function createProfessor(Professor, callback) {
    const { id, nome, telefone } = Professor;
    const db = openDbConnection();
    db.run("INSERT INTO Professor (id, nome, telefone) VALUES (?, ?, ?, ?)", [id,
        nome, telefone], function (err) {
            db.close();
            callback(err, { id: this.lastID });
        });
}
// Função para atualizar um cliente existente
function updateProfessor(id, nome, telefone) {
    const { id, nome, telefone } = Professor;
    const db = openDbConnection();
    db.run("UPDATE Professor SET id = ?, nome = ?, telefone = ? WHERE id = ?",
        [id, nome, telefone], function (err) {
            db.close();
            callback(err, { changes: this.changes });
        });
}
// Função para deletar um cliente
function deleteProfessor(id, callback) {
    const db = openDbConnection();
    db.run("DELETE FROM Professor WHERE id = ?", [id], function (err) {
        db.close();
        callback(err, { changes: this.changes });
    });
}
module.exports = {
    getAllProfessor,
    getProfessorById,
    createProfessor,
    updateProfessor,
    deleteProfessor,
};
