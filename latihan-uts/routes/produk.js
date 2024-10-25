const express = require('express');
const router = express.Router();
const produkController = require("/index");
router.get("/produk".produkController.index);
module.exports =router;