const Product = require("../models/product.model");

// Get all products
const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.status(200).json({ products });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get a single product
const getProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Post a product
const createProduct = async (req, res) => {
  try {
    const products = await Product.create(req.body);
    res.status(201).json(products);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Delete a product
const deleteProduct = async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id);

    if (!product) {
      return res.status(404).json({ message: "Product not found!" });
    }

    res.status(200).json({ message: "Product successfully deleted!" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  getProducts,
  createProduct,
  getProduct,
  deleteProduct,
};
