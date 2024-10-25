const mongoose = require("mongoose");

const kategoriSchema = new mongoose.Schema({
    nama_kategori:{
        type: String,
    },
    deskripsi:{
        type: String,
    },
    created_ad:{
        type: Date,
        
    },
    updated_at: {
        type: Date,
    },
    status: {
        type: Boolean,
    }
});

const kategori = mongoose.model('kategori', kategoriSchema);
module.exports = kategori;