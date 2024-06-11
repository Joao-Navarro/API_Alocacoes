const express = require('express');
const path = require('path');

const router = express.Router();

const professoresController = require('../controllers/professoresController');

router.get('/professor', professoresController.getAllProfessor);

const salasController = require('../controllers/salasController');

router.get('/salas', salasController.getAllSalas);

const visaoAlocacoesController = require('../controllers/visaoAlocacoesController');

router.get('/visaoAlocacao/:id', visaoAlocacoesController.getAllVisao);

const alocacoesController = require('../controllers/alocacoesController');

router.get('/alocacao', alocacoesController.getAllAlocacao);

module.exports = router;