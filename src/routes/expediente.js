const express = require("express");
const router = express.Router();
const Expediente = require("../models/expediente");

//GET
router.get("/expediente", async (req, res) => {
  try {
    const expediente = await Expediente.find({});
    res.json({ error: false, expediente });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

router.post("/expediente", async (req, res) => {
  try {
    const expediente = req.body;
    const response = await new Expediente(expediente).save();
    res.json({ error: false, expediente, response });
  } catch (err) {
    res.json({ error: true, message: err.message });
  }
});

module.exports = router;
