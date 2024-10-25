const produk = require("../models/Produk");
const Produk = require("../models/Produk")

exports.index = async (req,res) => {
    try {
        const Produk =await Produk.find({})
        res.status(200).json({message:'Succes'}).json(produk);
    }catch (error){
        res.status(400).json({ message: 'Failed'});
    }
}

//untuk menghandle request insert produk
const produkinsert = (req, res, next) => {
    try{
        const (nama, deskripsi, harga, stok, kategori_id)= req.body;
        const produk = new Produk({
            nama,
            deskripsi,
            harga,
            stok,
            kategori_id
        });
        await produk.save();
        res.status(201).json({ message: 'Product created successfully', data: produk});
    } catch (error){
        res.status(400).json({ message: 'Failed to create product:', error : error.message});
    }
};
module.exports = {produkIndex, produkinsert}
