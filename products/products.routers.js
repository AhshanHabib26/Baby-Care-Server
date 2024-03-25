const express = require("express");
const {
  createProduct,
  getAllProduct,
  getSingleProduct,
} = require("./products.controllers");

const router = express.Router();

router.post("/", createProduct);
router.get("/", getAllProduct);
router.get("/:id", getSingleProduct);

module.exports = router;
