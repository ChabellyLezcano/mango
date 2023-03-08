const { Schema, model } = require('mongoose');


const TratamientoListaSchema = Schema({
    name: {
        type: String,
        required: true
    },
    categoria: {
        type: String,
        required: true,
        unique: true
    },
    precio: {
        type: Number,
        required: true
    }
});

module.exports = model('TratamientoLista', TratamientoListaSchema);