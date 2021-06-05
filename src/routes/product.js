const express = require("express");
const {
  adminMiddleware,
  requireSignin,
} = require("../common-middleware/index");
const { createProduct } = require("../controllers/product");
const Product = require("../models/product");

const router = express.Router();
const multer = require("multer");
const upload = multer({ dest: "uploads/" });

router.post(
  "/product/create",
  requireSignin,
  adminMiddleware,
  upload.single("productPicture"),
  createProduct
);

//router.get("/category/getcategory", getCategory);

module.exports = router;
