const mongoose = require('mongoose');

const pessoaSchema = new mongoose.Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    age: { type: Number, required: true }
});

module.exports = mongoose.model('Pessoa', pessoaSchema);