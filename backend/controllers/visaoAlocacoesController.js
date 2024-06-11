const Visao = require('../models/visaoAlocacoesModel');

exports.getAllVisao = (req, res) => {
    const id = req.params.id
    Visao.getAllVisao(id,(err, Visao) => {
        if (err) {
            res.status(500).send(err);
        } else {
            res.json(Visao);
        }
    });
};

