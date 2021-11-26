const mongoose = require("mongoose");

const OrdemServico = mongoose.model("OrdemServico", {
  user_id: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },

  nome: String,
  telefone: String,
  itensPedido: {
    type: [{}],
    required: true,
  },
  status: String,
  delivery_address: String,
  preco: Number,
  valor_entrega: Number,
  troco_para: Number,
  forma_pagamento: String,
  token: String,
  data: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = OrdemServico;
