const express = require("express");
const router = express.Router();
const {
  getProducts,
  getProduct,
  createProduct,
  deleteProduct,
} = require("../controllers/products.controller");

router.get("/", getProducts);
router.get("/:id", getProduct);
router.post("/", createProduct);
router.delete("/:id", deleteProduct);

module.exports = router;
