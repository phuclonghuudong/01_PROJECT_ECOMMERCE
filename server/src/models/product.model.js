const mongoose = require("mongoose");
const productShema = new mongoose.Schema(
  {
    id: { type: String, required: true, unique: true },
    name: { type: String, required: true },
    image: { type: String, required: true },
    type: { type: String, required: true },
    color: { type: String, required: true },
    size: { type: String, required: true },
    price: { type: Number, required: true },
    countInStock: { type: Number, required: true },
    rating: { type: Number },
    description: { type: String },
  },
  {
    timestamps: true,
  }
);
const Product = mongoose.model("Product", productShema);
module.exports = Product;
