const mongoose = require("mongoose");

const User = mongoose.model("User", {
  nome: {
    type: String,
    required: true,
  },

  email: {
    type: String,
    required: true,
  },

  nro_celular: {
    type: String,
    required: true,
  },

  senha: {
    type: String,
    required: true,
  },

  endereco_completo: {
    type: String,
    required: true,
  },

  dataCadastro: {
    type: Date,
    default: Date.now(),
  },

  token: {
    type: String,
  },
});

module.exports = User;
