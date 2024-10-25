const mongoose = require("mongoose");
const produk = require("./produk");

const pesananSchema = new mongoose.Schema({
    pengguna_id:{
        type: mongoose.Schema.type.ObjectId,
        ref:'pengguna_id',
        require:true,
    },
    produk_id:{
        type: mongoose.Schema.type.ObjectId,
        ref:'produk_id',
        require:true,
    },
    jumlah:{
        type: Number,
        
    },
    status: {
        type: String,
    },
    tanggal_pesanan: {
        type: Date,
    }
});

const pesanan = mongoose.model('pesanan', pesananSchema);
module.exports = pesanan;