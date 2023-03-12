const mongoose = require('mongoose')

const Person = mongoose.model('Person', {
    name: String,
    salario: Number,
    telefone: Number,
    email: String,
    approved: Boolean,
})

module.exports = Person