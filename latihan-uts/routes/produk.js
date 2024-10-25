const express = require('express');
const router = express.Router();
const produkController = require("/controllers.controllerProduk");
router.get("/produk".produkController.index);
module.exports =router;