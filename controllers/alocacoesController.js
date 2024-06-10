const Alocacoes = require('../models/alocacoesModel');

exports.getAllAlocacoes = (req, res) => {
    Alocacoes.getAllAlocacoes((err, Alocacoes) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(Alocacoes);
        }
    });
};
