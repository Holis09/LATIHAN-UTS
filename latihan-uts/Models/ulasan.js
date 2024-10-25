const mongoose = require("mongoose");

const ulasanSchema = new mongoose.Schema({
    produk_id:{
        type: mongoose.Schema.type.ObjectId,
        ref:'produk_id',
        require:true,
    },
    pengguna_id:{
        type: mongoose.Schema.type.ObjectId,
        ref:'pengguna_id',
        require:true,
    },
    rating:{
        type: Number,
        
    },
    komentar: {
        type: String,
    },
    tanggal_ulasan: {
        type: Date,
    }
});

const ulasan = mongoose.model('ulasan', ulasanSchema);
module.exports = ulasan;