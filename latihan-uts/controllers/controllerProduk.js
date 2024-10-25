const Produk = require("../models/Produk")

exports.index = async (req,res) => {
    try {
        const Produk =await Produk.find({})
        res.status(200).json({message:'Succes'}).json(produk);
    }catch (error){
        res.status(400).json({ message: 'Failed'});
    }
}

//untuk menghandle request insert mahasiswa
const produkinsert = (req, res, next) => {
    try{
        const
    }
};
