const express = require("express");

const mongoose = require("mongoose");
const Product = require("../models/product");

const router = express.Router();
router.post("/getMedicine", (req, res) => {
  const code = req.body;
  console.log(code);
});

module.exports = router;
