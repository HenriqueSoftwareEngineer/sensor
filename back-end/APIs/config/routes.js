const express = require('express');
const Pessoa = require('../models/pessoa');

const router = express.Router();

// Criar uma nova pessoa
router.post('/pessoa', async (req, res) => {
    const novaPessoa = new Pessoa(req.body);
    await novaPessoa.save();
    res.status(201).send(novaPessoa);
});

// Obter todas as pessoas
router.get('/pessoa', async (req, res) => {
    const pessoas = await Pessoa.find();
    res.send(pessoas);
});

// Atualizar uma pessoa
router.put('/pessoa/:id', async (req, res) => {
    const pessoa = await Pessoa.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.send(pessoa);
});

// Deletar uma pessoa
router.delete('/pessoa/:id', async (req, res) => {
    await Pessoa.findByIdAndDelete(req.params.id);
    res.status(204).send();
});

module.exports = router;