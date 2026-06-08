const express = require("express");
const router = express.Router();
const {
  shortUrl,
  allUrl,
  deleteUrl,
} = require("../controllers/shortUrlController");

router.post("/short-it", shortUrl);
router.get("/all-url", allUrl);
router.delete("/delete-url/:id", deleteUrl);

module.exports = router;
