const Visao = require('../models/visaoAlocacoesModel');

exports.getVisaoById = (req, res) => {
    Visao.getVisaoById((err, Visao) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(Visao);
        }
    });
};

