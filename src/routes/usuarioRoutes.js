const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

/**
 * @swagger
 * /usuarios:
 *   get:
 *     summary: Lista todos os usuários cadastrados
 *     responses:
 *       '200':
 *         description: Lista de usuários
 */
router.get('/', usuarioController.listarUsuarios);

/**
 * @swagger
 * /usuarios:
 *   post:
 *     summary: Cadastra um novo usuário
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               nome:
 *                 type: string
 *               email:
 *                 type: string
 *     responses:
 *       '201':
 *         description: Usuário criado com sucesso
 */
router.post('/', usuarioController.criarUsuario);

/**
 * @swagger
 * /usuarios/{id}:
 *   get:
 *     summary: Busca um usuário por ID
 */
router.get('/:id', usuarioController.buscarUsuarioPorId);

/**
 * @swagger
 * /usuarios/{id}:
 *   put:
 *     summary: Atualiza um usuário
 */
router.put('/:id', usuarioController.atualizarUsuario);

/**
 * @swagger
 * /usuarios/{id}:
 *   delete:
 *     summary: Remove um usuário
 */
router.delete('/:id', usuarioController.deletarUsuario);

module.exports = router;