const mongoose = require("mongoose");

const Expediente = mongoose.model("Expediente", {
  dia: {
    type: Number,
    required: true,
  },

  horario_inicio: {
    type: Number,
    required: true,
  },

  horario_fim: {
    type: Number,
    required: true,
  },
});

module.exports = Expediente;
