//ProfessoresController.js
const Professores = require('../models/professoresModel');

exports.getAllProfessoress = (req, res) => {
    Professores.getAllProfessoress((err, Professoress) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(Professoress);
        }
    });
};
