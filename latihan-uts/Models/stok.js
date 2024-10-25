const mongoose = require("mongoose");

const stokSchema = new mongoose.Schema({
    produk_id:{
        type: mongoose.Schema.type.ObjectId,
        ref:'Kategori',
        require:true,
    },
    jumlah:{
        type: Number,
    },
    tanggal_update:{
        type: Date,
        
    },
    keterangan: {
        type: String,
    },
    lokasi: {
        type: String,
    }
});

const stok = mongoose.model('stok', stokSchema);
module.exports = stok;