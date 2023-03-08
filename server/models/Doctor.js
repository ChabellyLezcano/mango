const { Schema, model } = require('mongoose');


const DoctorSchema = Schema({
    foto: {
        type: String,
        require: false 
      },
    name: {
        type: String,
        required: true
    },
    apellidos: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true
    },
    numColegiado: {
        type: String,
        required: true,
        unique: true
    }
    ,
    telefono_movil: {
        type: String,
        required: true
    }
    ,
    especialidad: {
        type: String,
        required: true
    }
});

module.exports = model('Doctor', DoctorSchema );