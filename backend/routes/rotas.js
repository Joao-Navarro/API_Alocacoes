const express = require('express');
const path = require('path');

const router = express.Router();

const professoresController = require('../controllers/professoresController');

router.get('/', professoresController.getAllProfessores);

const salasController = require('../controllers/salasController');

router.get('/', salasController.getAllSalas);

const visaoAlocacoesController = require('../controllers/visaoAlocacoesController');

router.get('/', visaoAlocacoesController.getAllVisao);

const alocacoesController = require('../controllers/alocacoesController');

router.get('/', alocacoesController.getAllAlocacao);

module.exports = router;