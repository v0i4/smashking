const mongoose = require("mongoose");

const Token = mongoose.model("Token", {
  token: String,
});

module.exports = Token;
