const { Schema, model } = require('mongoose');


const PacienteSchema = Schema({
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    direccion: {
        type: String,
        required: true
    },
    cp: {
        type: Number,
        required: true
    },
    dni: {
        type: String,
        required: true,
        unique: true
    }
    ,
    telefono_movil: {
        type: String,
        required: true
    },
    municipio: {
        type: String,
        required: true
    }
    ,
    provincia: {
        type: String,
        required: true
    }
});

module.exports = model('Paciente', PacienteSchema );