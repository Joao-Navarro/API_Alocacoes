const Alocacoes = require('../models/alocacoesModel');

exports.getAlocacoesById = (req, res) => {
    Alocacoes.getAlocacoesById(req.params.id, (err, Alocacoes) => {
        if (err) {
            res.status(500).send(err);
        } else if (Alocacoes) {
            res.json(Alocacoes);
        } else {
            res.status(404).send({ message: 'Alocacoes não encontrado' });
        }
    });
};
