//VisaoController.js
const Visao = require('../models/visaoAlocacoesModel');
// Controlador para obter todos os Visao
exports.getAllVisao = (req, res) => {
    Visao.getAllVisao((err, Visao) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(Visao);
        }
    });
};
// Controlador para obter um Visao pelo ID
exports.getVisaoById = (req, res) => {
    Visao.getVisaoById(req.params.id, (err, Visao) => {
        if (err) {
            res.status(500).send(err);
        } else if (Visao) {
            res.json(Visao);
        } else {
            res.status(404).send({ message: 'Visão não encontrado' });
        }
    });
};
// Controlador para criar um novo Visao
exports.createVisao = (req, res) => {
    Visao.createVisao(req.body, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).json(result);
        }
    });
};
// Controlador para atualizar um Visao existente
exports.updateVisao = (req, res) => {
    Visao.updateVisao(req.params.id, req.body, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else if (result.changes) {
            res.status(200).json(result);
        } else {
            res.status(404).send({ message: 'Visão não encontrado' });
        }
    });
};
// Controlador para deletar um Visao
exports.deleteVisao = (req, res) => {
    Visao.deleteVisao(req.params.id, (err, result) => {
if (err) {
        res.status(500).send(err);
    } else if (result.changes) {
        res.status(200).json({ message: 'Visão deletado com sucesso' });
    } else {
        res.status(404).send({ message: 'Visão não encontrado' });
    }
    });
};