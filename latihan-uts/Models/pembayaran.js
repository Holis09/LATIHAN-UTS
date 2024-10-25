const mongoose = require("mongoose");
const transaksi = require("./transaksi");

const pembayaranSchema = new mongoose.Schema({
    transaksi_id:{
        type: mongoose.Schema.type.ObjectId,
        ref:'transaksi_id',
        require:true,
    },
    metode_pembayaran:{
        type: String,
    },
    jumlah:{
        type: Number,
        
    },
    tanggal_pembayaran: {
        type: Date,
    },
    status: {
        type: String,
    }
});

const pembayaran = mongoose.model('pembayaran', pembayaranSchema);
module.exports = pembayaran;