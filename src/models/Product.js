const moongoose = require("mongoose"); 

const productSchema = new moongoose.Schema({
    _id : Number,
    name : String,
    description : String,
    price : Number,
    quantity : Number,
    isAvailable : {type: Boolean, default: true},
}, { timestamps: true });

module.exports = moongoose.model("Product", productSchema);