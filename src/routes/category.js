const express = require("express");

const { addCategory, getCategory } = require("../controllers/category");
const router = express.Router();

router.post("/category/create", addCategory);
router.get("/category/getcategory", getCategory);

module.exports = router;
