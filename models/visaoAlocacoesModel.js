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
function getAllVisao(callback) {
    const db = openDbConnection();
    db.all("SELECT * FROM Visao", [], (err, rows) => {
        db.close();
        callback(err, rows);
    });
}

// Função para buscar um cliente por ID
function getVisaoById(id, callback) {
    const db = openDbConnection();
    db.get("SELECT * FROM Visao WHERE id = ?", [id], (err, row) => {
        db.close();
        callback(err, row);
    });
}
// Função para criar um novo cliente
function createVisao(Visao, callback) {
    const { nomeprofessor, nomesala, periodo, bloco } = Visao;
    const db = openDbConnection();
    db.run("INSERT INTO Alocaçao (nomeprofessor, nomesala, periodo, bloco) VALUES (?, ?, ?, ?)", [nomeprofessor, nomesala,
        periodo, bloco], function (err) {
            db.close();
            callback(err, { id: this.lastID });
        });
}
// Função para atualizar um cliente existente
function updateVisao(nomeprofessor, nomesala, periodo, bloco) {
    const {nomeprofessor, nomesala, periodo, bloco} = Visao;
    const db = openDbConnection();
    db.run("UPDATE Visao SET nomeprofessor = ?, nomesala = ?, periodo = ?, bloco = ?  WHERE id = ?",
        [nomeprofessor, nomesala, periodo, bloco ], function (err) {
            db.close();
            callback(err, { changes: this.changes });
        });
}
// Função para deletar um cliente
function deleteVisao(id, callback) {
    const db = openDbConnection();
    db.run("DELETE FROM Visao WHERE id = ?", [id], function (err) {
        db.close();
        callback(err, { changes: this.changes });
    });
}
module.exports = {
    getAllVisao,
    getVisaoById,
    createVisao,
    updateVisao,
    deleteVisao,
};