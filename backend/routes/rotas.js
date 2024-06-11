const express = require('express');

const router = express.Router();

const professoresController = require('../controllers/professoresController');

router.get('/', professoresController.getAllProfessor);

const salasController = require('../controllers/salasController');

router.get('/', salasController.getAllSalas);

const visaoAlocacoesController = require('../controllers/visaoAlocacoesController');

router.get('/', visaoAlocacoesController.getVisaoById);

const alocacoesController = require('../controllers/alocacoesController');

router.get('/', alocacoesController.getAllAlocacao);

module.exports = router;