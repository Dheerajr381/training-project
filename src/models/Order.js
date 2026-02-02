const moongoose = require("mongoose");

const orderSchema = new moongoose.Schema({
    productId : {type: moongoose.Schema.Types.ObjectId, ref: 'Product'},
    quantity : Number,
    price : Number,
    totalAmount : Number,
    status : {type: String, enum: ['CREATED', 'CANCELLED', 'COMPLETED'], default: 'CREATED'},
    customerId : {type: moongoose.Schema.Types.ObjectId, ref: 'User'},
    orderDate : Date
}, { timestamps: true });

module.exports = moongoose.model("Order", orderSchema);