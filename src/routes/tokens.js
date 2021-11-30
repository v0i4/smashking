const express = require("express");
const router = express.Router();
const Token = require("../models/token");

//Grava o token no banco
router.post("/token", async (req, res) => {
  try {
    const token = req.body;
    const response = await new Token(token).save();
    res.json({ error: false, Token, response });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

module.exports = router;
