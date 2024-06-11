//ProfessoresController.js
const Professor = require('../models/professoresModel');

exports.getAllProfessor = (req, res) => {
    Professor.getAllProfessor((err, Professor) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(Professor);
        }
    });
};
