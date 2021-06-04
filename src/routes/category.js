const express = require("express");

const { addCategory, getCategory } = require("../controllers/category");
const {
  adminMiddleware,
  requireSignin,
} = require("../common-middleware/index");

const router = express.Router();

router.post("/category/create", requireSignin, adminMiddleware, addCategory);
router.get("/category/getcategory", getCategory);

module.exports = router;
