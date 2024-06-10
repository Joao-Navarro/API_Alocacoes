const Salas = require('../models/salasModel');

exports.getAllSalas = (req, res) => {
    Salas.getAllSalas((err, Salas) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(Salas);
        }
    });
};
