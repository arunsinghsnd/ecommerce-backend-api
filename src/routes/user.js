const express = require("express");
const { signup } = require("../controllers/user");
const router = express.Router();

router.post("/signup", signup);
router.get("/signin", (req, res) => {
  //
});

module.exports = router;
