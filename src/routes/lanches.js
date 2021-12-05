const express = require("express");
const router = express.Router();
const Lanche = require("../models/lanche");

//GET ALL LANCHES
router.get("/lanches", async (req, res) => {
  try {
    const lanches = await Lanche.find({});
    res.json({ error: false, lanches });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

//GET lanche BY ID
router.get("/lanches/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const lanche = await Lanche.findById(id);
    res.json({ error: false, lanche });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

//GET lanche BY categoria
router.get("/lanches/categoria/:categoria", async (req, res) => {
  try {
    const categoria = req.params.categoria;
    const lanches = await Lanche.find({ categoria: categoria });
    res.json({ error: false, lanches });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

//CREATE NEW Lanche
router.post("/lanches", async (req, res) => {
  try {
    const lanche = req.body;
    const response = await new Lanche(lanche).save();
    res.json({ error: false, Lanche, response });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

//UPDATE Lanche
router.put("/lanches/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const new_Lanche = req.body;

    const lanche = await User.findByIdAndUpdate(id, new_Lanche);
    res.json({ error: false, lanche });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

//DELETE Lanche
router.delete("/lanches/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const lanche = await User.findByIdAndDelete(id);
    res.json({ error: false });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

module.exports = router;
