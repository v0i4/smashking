const mongoose = require("mongoose");

const Adicional = mongoose.model("Adicional", {
  nome: {
    type: String,
    required: true,
  },
  preco: {
    type: Number,
    required: true,
  },

  quantidade: Number,
});

module.exports = Adicional;
