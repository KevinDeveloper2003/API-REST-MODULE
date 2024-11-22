const mongoose = require('mongoose');

// Esquema para el proyecto
const ProyectoSchema = new mongoose.Schema({
  numero: {
    type: String,
    unique: true,
    required: true
  },
  titulo: {
    type: String,
    required: true
  },
  fechaIniciacion: {
    type: Date,
    required: true
  },
  fechaEntrega: {
    type: Date,
    required: true
  },
  valor: {
    type: Number,
    required: true
  },
  fechaCreacion: {
    type: Date,
    default: Date.now
  },
  fechaActualizacion: {
    type: Date,
    default: Date.now
  },
  cliente: {
    type: String,
    unique: true,
    required: true
  },
  tipoProyecto: {
    type: String,
    unique: true,
    required: true
  },
  universidad: {
    type: String,
    unique: true,
    required: true
  },
  etapa: {
    type: String,
    unique: true,
    required: true
  },

});

// Creamos y expotamos el modelo Proyecto
module.exports = mongoose.model('Proyecto', ProyectoSchema);