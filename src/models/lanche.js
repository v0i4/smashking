const mongoose = require("mongoose");

const Lanche = mongoose.model("Lanche", {
  nome: {
    type: String,
    required: true,
  },
  preco: {
    type: Number,
    required: true,
  },
  foto: {
    type: String,
  },
  descricao: String,
  quantidade: Number,
  categoria: String,
});

module.exports = Lanche;
