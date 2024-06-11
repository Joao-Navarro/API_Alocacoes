//ProfessoresController.js
const Professores = require('../models/professoresModel');

exports.getAllProfessores = (req, res) => {
    Professores.getAllProfessores((err, Professoress) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(Professoress);
        }
    });
};
