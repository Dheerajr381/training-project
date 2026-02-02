const Product = require("../models/Product");

exports.createProduct = async (req, res) => {
    // const product = await Product.create(req.body); //want to send
    // res.status(201).json( product ); //want get back or retrive back
    try{
        const lastProduct = await Product.findOne().sort({_id: -1}).select('_id');
        const nextId = lastProduct ? lastProduct._id + 1 : 1;
        const product = new Product({
            _id : nextId, ...req.body,
        });
        return res.status(201).json(product);

    }catch(error){
        return res.status(400).json({ message: error.message });
    }
};

exports.getProducts = async (req, res) => {
    const products = await Product.find();
    res.status(200).json( products );
}

exports.getProductById = async (req, res) => {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.json( product );
}

exports.updateProduct = async (req, res) => {
    const { id } = req.params;
    const product = await Product.findByIdAndUpdate(id, req.body, { new: true});
    res.status(200).json( product);
}

exports.deleteProduct = async (req, res) => {
    const { id } = req.params;
    await Product.findByIdAndDelete(id);
    res.status(204).json({});
}