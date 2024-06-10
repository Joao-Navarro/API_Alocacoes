const Visao = require('../models/visaoAlocacoesModel');

exports.getAllVisao = (req, res) => {
    Visao.getAllVisao((err, Visao) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(Visao);
        }
    });
};

