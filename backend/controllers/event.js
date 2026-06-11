const express = require("express");
const catchAsyncError = require("../middleware/catchAsyncError");
const { isSellerAuthenticated } = require("../middleware/auth");

const { upload } = require("../multer");
const Shop = require("../model/shop");
const Event = require("../model/event");
const ErrorHandler = require("../utils/ErrorHandler");
const router = express.Router();

//Create Event
router.post(
  "/create-event",
  upload.array("images"),
  catchAsyncError(async (req, res, next) => {
    try {
      const shopId = req.body.shopId;
      const shop = await Shop.findById(shopId);

      if (!shop) {
        return next(new ErrorHandler("No Shop Found with this ShopID", 400));
      } else {
        const files = req.files;
        const imageUrls = files.map((file) => `${file.filename}`);

        const eventData = req.body;
        eventData.images = imageUrls;
        eventData.shop = shop;

        const event = await Event.create(eventData);

        return res.status(201).json({
          success: true,
          event,
        });
      }
    } catch (error) {
      return next(new ErrorHandler(error, 500));
    }
  }),
);

// get all events

router.get(
  "/get-all-events/:id",
  catchAsyncError(async (req, res, next) => {
    try {
      const events = await Event.find({ shopId: req.params.id });
      res.status(200).json({
        success: true,
        events,
      });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  }),
);

//delete a product
router.delete(
  "/delete-shop-event/:id",
  isSellerAuthenticated,
  catchAsyncError(async (req, res, next) => {
    try {
      const productId = req.params.id;
      const event = await Event.findByIdAndDelete(productId);

      if (!product) {
        return next(new ErrorHandler("Event not found with this id", 500));
      }

      return res
        .status(200)
        .json({ success: true, message: "Event Deleted Successfully!" });
    } catch (error) {
      return next(new ErrorHandler(error, 400));
    }
  }),
);

module.exports = router;
