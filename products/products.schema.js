const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: [true, "Title is required"],
    },
    price: {
      type: String,
      required: [true, "Price is required"],
    },
    ratings: {
      type: String,
      required: [true, "Ratings are required"],
    },
    brand: {
      type: String,
      required: [true, "Brand is required"],
    },
    category: {
      type: String,
      required: [true, "Category is required"],
    },
    image: {
      type: String,
      required: [true, "Image URL is required"],
    },
    description: {
      type: String,
      required: [true, "Description is required"],
    },
    flashSale: {
      type: Boolean,
      default: false,
    },
    flashSaleOffer: {
      type: String,
    },
    discount: {
      type: String,
    },
  },
  { timestamps: true }
);

const Product = mongoose.model("Product", productSchema);

module.exports = Product;
