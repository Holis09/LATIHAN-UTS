const mongoose = require("mongoose");

const produkSchema = new mongoose.Schema({
    nama:{
        type: String,
    },
    deskripsi:{
        type: String,
    },
    harga:{
        type: Number,
        
    },
    stok: {
        type: Number,
    },
    kategori_id: {
        type: mongoose.Schema.type.ObjectId,
        ref:'Kategori',
        require:true,
    }
});

const produk = mongoose.model('produk', produkSchema);
module.exports = produk;