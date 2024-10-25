const mongoose = require("mongoose");

const diskonSchema = new mongoose.Schema({
    produk_id:{
        type: mongoose.Schema.type.ObjectId,
        ref:'produk_id',
        require:true,
    },
    persentase_diskon:{
        type: Number,
    },
    tanggal_mulai:{
        type: Date,
        
    },
    tanggal_selesai: {
        type: Date,
    },
    keterangan: {
        type: String,
    }
});

const diskon = mongoose.model('diskon', diskonSchema);
module.exports = diskon;