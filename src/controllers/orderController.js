const Order = require('../models/Order');
const product = require('../models/Product');

exports.createOrder = async (req, res) => {
    const {productId, quantity, customerId} = req.body;
    const product = await Product.findById(productId);
    if(product.quantity < quantity){
        return res.status(400).json({message: 'Insufficient product quantity'});
    };

    const total = product.price * quantity;
    const order = await Order.create({
        productId,
        quantity,
        price: product.price,
        total,
        customerId
    });
    product.quantity -= quantity;

    await product.save();
    res.status(201).json(order);
};