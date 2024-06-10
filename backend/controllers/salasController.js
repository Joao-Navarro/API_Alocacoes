//SalasController.js
const Salas = require('../models/salasModel');
// Controlador para obter todos os Salas
exports.getAllSalas = (req, res) => {
    Salas.getAllSalas((err, Salas) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(Salas);
        }
    });
};
// Controlador para obter um Salas pelo ID
exports.getSalasById = (req, res) => {
    Salas.getSalasById(req.params.id, (err, Salas) => {
        if (err) {
            res.status(500).send(err);
        } else if (Salas) {
            res.json(Salas);
        } else {
            res.status(404).send({ message: 'Sala não encontrado' });
        }
    });
};
// Controlador para criar um novo Salas
exports.createSalas = (req, res) => {
    Salas.createSalas(req.body, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).json(result);
        }
    });
};
// Controlador para atualizar um Salas existente
exports.updateSalas = (req, res) => {
    Salas.updateSalas(req.params.id, req.body, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else if (result.changes) {
            res.status(200).json(result);
        } else {
            res.status(404).send({ message: 'Sala não encontrado' });
        }
    });
};
// Controlador para deletar um Salas
exports.deleteSalas = (req, res) => {
    Salas.deleteSalas(req.params.id, (err, result) => {
if (err) {
        res.status(500).send(err);
    } else if (result.changes) {
        res.status(200).json({ message: 'Sala deletado com sucesso' });
    } else {
        res.status(404).send({ message: 'Sala não encontrado' });
    }
    });
};