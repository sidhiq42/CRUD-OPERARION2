const ProductModel = require("../models/product.model");
const ProductDetails = {
  createProduct: async (req, res, next) => {
    try {
      const product = await ProductModel.create(req.body);
      if (!product) {
        res.status(404).json({
          message: "product not created",
        });
      }
      res.status(201).json({
        message: "product successfully created",
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
  viewAllproducts: async (req, res, next) => {
    try {
      const product = await ProductModel.find({});
      if (!product) {
        res.status(404).json({
          message: "Empty Products",
        });
      }
      res.status(200).json({
        product,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
  viewSingleProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await ProductModel.findById(id);
      if (!product) {
        res.status(404).json({
          message: "Product Not Found",
        });
      }
      res.status(200).json({ product });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
  editProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await ProductModel.findByIdAndUpdate(id, req.body, {
        new: true,
      });
      if (!product) {
        res.status(404).json({
          message: "prouct not found",
        });
      }
      res.status(200).json({
        message: "product updated successfully",
        product,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
  deleteProduct: async (req, res) => {
    try {
      const { id } = req.params;
      const product = await ProductModel.findByIdAndDelete(id)
      if (!product) {
        res.status(404).json({
          message: "prouct not found",
        });
      }
      res.status(200).json({
        message: "product deleted successfully",
        product,
      });
    } catch (error) {
      res.status(500).json({
        message: "Internal Server Error",
      });
    }
  },
};
module.exports = ProductDetails;
