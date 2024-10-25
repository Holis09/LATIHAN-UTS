const mongoose = require("mongoose");

const transaksiSchema = new mongoose.Schema({
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
    jumlah:{
        type: Number,
        
    },
    total_harga: {
        type: Number,
    },
    tanggal_transaksi: {
        type: Date,
    }
});

const transaksi = mongoose.model('transaksi', transaksiSchema);
module.exports = transaksi;