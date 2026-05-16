const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Please enter product name"],
  },

  description: {
    type: String,
    required: [true, "Please enter your product description"],
  },

  category: {
    type: String,
    required: [true, "Please enter product category"],
  },
  tags: {
    type: String,
  },
  originalPrice: {
    type: Number,
    required: [true, "Please enter product price"],
  },
  discountPrice: {
    type: Number,
    required: [true, "Please enter product discounted Price"],
  },
  stock: {
    type: Number,
    required: [true, "Please enter product stock"],
  },

  images: [
    {
      type: String,
    },
  ],

  shopId: {
    type: String,
    required: true,
  },
  shop: {
    type: Object,
    required: true,
  },
  sold_out: {
    type: Number,
    default: 0,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model("Product", productSchema);
