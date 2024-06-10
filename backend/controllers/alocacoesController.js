//AlocacoesController.js
const Alocacoes = require('../models/alocacoesModel');
// Controlador para obter todos os Alocacoes
exports.getAllAlocacoes = (req, res) => {
    Alocacoes.getAllAlocacoes((err, Alocacoes) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(Alocacoes);
        }
    });
};
// Controlador para obter um Alocacoes pelo ID
exports.getAlocacoesById = (req, res) => {
    Alocacoes.getAlocacoesById(req.params.id, (err, Alocacoes) => {
        if (err) {
            res.status(500).send(err);
        } else if (Alocacoes) {
            res.json(Alocacoes);
        } else {
            res.status(404).send({ message: 'Alocação não encontrado' });
        }
    });
};
// Controlador para criar um novo Alocacoes
exports.createAlocacoes = (req, res) => {
    Alocacoes.createAlocacoes(req.body, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).json(result);
        }
    });
};
// Controlador para atualizar um Alocacoes existente
exports.updateAlocacoes = (req, res) => {
    Alocacoes.updateAlocacoes(req.params.id, req.body, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else if (result.changes) {
            res.status(200).json(result);
        } else {
            res.status(404).send({ message: 'Alocação não encontrado' });
        }
    });
};
// Controlador para deletar um Alocacoes
exports.deleteAlocacoes = (req, res) => {
    Alocacoes.deleteAlocacoes(req.params.id, (err, result) => {
if (err) {
        res.status(500).send(err);
    } else if (result.changes) {
        res.status(200).json({ message: 'Alocação deletado com sucesso' });
    } else {
        res.status(404).send({ message: 'Alocação não encontrado' });
    }
    });
};