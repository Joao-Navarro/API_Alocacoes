const Alocacao = require('../models/alocacoesModel');

exports.getAllAlocacao = (req, res) => {
    Alocacao.getAllAlocacao(req.params.id, (err, Alocacao) => {
        if (err) {
            res.status(500).send(err);
        } else if (Alocacao) {
            res.json(Alocacao);
        } else {
            res.status(404).send({ message: 'Alocacoes não encontrado' });
        }
    });
};
