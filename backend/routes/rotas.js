//clienteRoutes.js
const express = require('express');
const router = express.Router();
const professoresController = require('../controllers/professoresController');
// lembrando que a rota raiz tem clientes, definido no app.js
// Rota para obter todos os clientes
router.get('/', professoresController.getAllProfessores);
// Rota para obter um único cliente pelo ID
router.get('/:id', professoresController.getProfessoresById);
// Rota para criar um novo Professor
router.post('/', professoresController.createProfessores);
// Rota para atualizar um Professor existente
router.put('/:id', professoresController.updateProfessores);
// Rota para deletar um Professor
router.delete('/:id', professoresController.deleteProfessores);

const salasController = require('../controllers/salasController');
// Rota para obter todos os clientes
router.get('/', salasController.getAllSalas);
// Rota para obter um único cliente pelo ID
router.get('/:id', salasController.getSalasById);
// Rota para criar um novo Sala
router.post('/', salasController.createSalas);
// Rota para atualizar um Sala existente
router.put('/:id', salasController.updateSalas);
// Rota para deletar um Sala
router.delete('/:id', salasController.deleteSalas);

const visaoAlocacoesController = require('../controllers/visaoAlocacoesController');
// Rota para obter todos os clientes
router.get('/', visaoAlocacoesController.getAllVisao);
// Rota para obter um único cliente pelo ID
router.get('/:id', visaoAlocacoesController.getVisaoById);
// Rota para criar um novo Visao
router.post('/', visaoAlocacoesController.createVisao);
// Rota para atualizar um Visao existente
router.put('/:id', visaoAlocacoesController.updateVisao);
// Rota para deletar um Visao
router.delete('/:id', visaoAlocacoesController.deleteVisao);

const alocacoesController = require('../controllers/alocacoesController');
// Rota para obter todos os clientes
router.get('/', alocacoesController.getAllAlocacao);
// Rota para obter um único cliente pelo ID
router.get('/:id', alocacoesController.getAlocacaoById);
// Rota para criar um novo Alocacao
router.post('/', alocacoesController.createAlocacao);
// Rota para atualizar um Alocacao existente
router.put('/:id', alocacoesController.updateAlocacao);
// Rota para deletar um Alocacao
router.delete('/:id', alocacoesController.deleteAlocacao);
module.exports = router;