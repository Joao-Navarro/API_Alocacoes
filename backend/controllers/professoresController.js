//ProfessoresController.js
const Professores = require('../models/professoresModel');
// Controlador para obter todos os Professoress
exports.getAllProfessoress = (req, res) => {
    Professores.getAllProfessoress((err, Professoress) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(Professoress);
        }
    });
};
// Controlador para obter um Professores pelo ID
exports.getProfessoresById = (req, res) => {
    Professores.getProfessoresById(req.params.id, (err, Professores) => {
        if (err) {
            res.status(500).send(err);
        } else if (Professores) {
            res.json(Professores);
        } else {
            res.status(404).send({ message: 'Professor não encontrado' });
        }
    });
};
// Controlador para criar um novo Professores
exports.createProfessores = (req, res) => {
    Professores.createProfessores(req.body, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.status(201).json(result);
        }
    });
};
// Controlador para atualizar um Professores existente
exports.updateProfessores = (req, res) => {
    Professores.updateProfessores(req.params.id, req.body, (err, result) => {
        if (err) {
            res.status(500).send(err);
        } else if (result.changes) {
            res.status(200).json(result);
        } else {
            res.status(404).send({ message: 'Professor não encontrado' });
        }
    });
};
// Controlador para deletar um Professores
exports.deleteProfessores = (req, res) => {
    Professores.deleteProfessores(req.params.id, (err, result) => {
if (err) {
        res.status(500).send(err);
    } else if (result.changes) {
        res.status(200).json({ message: 'Professor deletado com sucesso' });
    } else {
        res.status(404).send({ message: 'Professor não encontrado' });
    }
    });
};