const express = require("express");
const {
  adminMiddleware,
  requireSignin,
} = require("../common-middleware/index");
const { createProduct } = require("../controllers/product");
const Product = require("../models/product");

const router = express.Router();
const multer = require("multer");

const shortid = require("shortid");
const path = require("path");

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(path.dirname(__dirname), "uploads"));
  },
  filename: function (req, file, cb) {
    cb(null, shortid.generate() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

router.post(
  "/product/create",
  requireSignin,
  adminMiddleware,
  upload.array("productPicture"),
  createProduct
);

module.exports = router;
