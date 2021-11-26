const express = require("express");
const router = express.Router();
const OrdemServico = require("../models/ordemservico");

router.post("/ordemservico", async (req, res) => {
  try {
    const ordemServico = req.body;
    const response = await new OrdemServico(ordemServico).save();
    res.json({ error: false, ordemServico, response });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

//sort desc
router.get("/ordemservico", async (req, res) => {
  try {
    const ordens = await OrdemServico.find({}).sort({ data: -1 });
    res.json({ error: false, ordens });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

//getById
router.get("/ordemservico/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const ordens = await OrdemServico.find({ _id: id });
    res.json({ error: false, ordens });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

router.put("/ordemservico/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const new_Ordem = req.body;

    const ordem = await OrdemServico.findByIdAndUpdate(id, new_Ordem);
    res.json({ error: false, ordem });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

module.exports = router;
