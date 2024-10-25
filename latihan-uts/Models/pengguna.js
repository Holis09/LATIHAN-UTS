const mongoose = require("mongoose");

const penggunaSchema = new mongoose.Schema({
    name:{
        type: String,
    },
    email:{
        type: String,
    },
    password:{
        type: String,
        
    },
    alamat: {
        type: String,
    },
    tanggal_daftar: {
        type: Date,
    }
});

const pengguna = mongoose.model('pengguna', penggunaSchema);
module.exports = pengguna;