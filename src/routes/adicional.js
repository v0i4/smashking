const express = require("express");
const router = express.Router();
const Adicional = require("../models/adicional");

//GET ALL LANCHES
router.get("/adicionais", async (req, res) => {
  try {
    const adicionais = await Adicional.find({});
    res.json({ error: false, adicionais });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

//GET adicional BY ID
router.get("/adicionais/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const adicional = await Adicional.findById(id);
    res.json({ error: false, adicional });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

//CREATE NEW adicional
router.post("/adicionais", async (req, res) => {
  try {
    const adicional = req.body;
    const response = await new Adicional(adicional).save();
    res.json({ error: false, adicional, response });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

//UPDATE adicional
router.put("/adicionais/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const new_adicional = req.body;

    const adicional = await Adicional.findByIdAndUpdate(id, new_adicional);
    res.json({ error: false, adicional });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

//DELETE adicional
router.delete("/adicionais/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const adicional = await Adicional.findByIdAndDelete(id);
    res.json({ error: false });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

module.exports = router;
