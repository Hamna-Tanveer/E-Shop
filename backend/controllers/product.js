const express = require("express");
const router = express.Router();
const Product = require("../model/product");
const { upload } = require("../multer");
const ErrorHandler = require("../utils/ErrorHandler");
const Shop = require("../model/shop");
const catchAsyncError = require("../middleware/catchAsyncError");
const { isSellerAuthenticated } = require("../middleware/auth");

//create-product

router.post(
  "/create-product",
  upload.array("images"),
  catchAsyncError(async (req, res, next) => {
    try {
      const shopId = req.body.shopId;
      const shop = await Shop.findById(shopId);
      if (!shop) {
        return next(new ErrorHandler("Shop Id is invalid", 400));
      } else {
        const files = req.files;
        const imageUrl = files.map((file) => `${file.filename}`);
        const productData = req.body;
        productData.images = imageUrl;
        productData.shop = shop;

        const product = await Product.create(productData);

        res.status(201).json({
          success: true,
          product,
        });
      }
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  }),
);

// get all products

router.get(
  "/get-all-products-shop/:id",
  catchAsyncError(async (req, res, next) => {
    try {
      const products = await Product.find({ shopId: req.params.id });
      res.status(200).json({
        success: true,
        products,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  }),
);

//delete a product
router.delete(
  "/delete-shop-product/:id",
  isSellerAuthenticated,
  catchAsyncError(async (req, res, next) => {
    try {
      const productId = req.params.id;
      const product = await Product.findByIdAndDelete(productId);

      if (!product) {
        return next(new ErrorHandler("Product not found with this id", 500));
      }

      return res
        .status(200)
        .json({ success: true, message: "Product Deleted Successfully!" });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  }),
);
module.exports = router;
