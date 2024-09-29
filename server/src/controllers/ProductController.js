const ProductServices = require("../services/ProductService");

const createProduct = async (req, res) => {
  try {
    const { id, name, image, type, color, size, countInStock, price, rating, description } = req.body;

    if (!id || !name || !image || !type || !color || !size || !countInStock || !price || !rating) {
      return res.status(200).json({
        EC: "ERR",
        EM: "The input is required",
        DT: "",
      });
    }
    const result = await ProductServices.createProduct(req.body);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({
      EC: "ERR",
      EM: error,
      DT: "",
    });
  }
};
const updateProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const data = req.body;
    if (!productId) {
      return res.status(200).json({
        EC: "ERR",
        EM: "The productId is required!",
        DT: "",
      });
    }

    const result = await ProductServices.updateProduct(productId, data);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({
      EC: "ERR",
      EM: error,
      DT: "",
    });
  }
};
const getAllProduct = async (req, res) => {
  try {
    const { limit, page, sort, filter } = req.query;
    const result = await ProductServices.getAllProduct(Number(limit) || 8, Number(page) || 0, sort, filter);

    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({
      EC: "ERR",
      EM: error,
      DT: "",
    });
  }
};
const getDetailProduct = async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(404).json({
        EC: "ERR",
        EM: "Id không tồn tại!",
        DT: "",
      });
    }
    const result = await ProductServices.getDetailProduct(req.params.id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({
      EC: "ERR",
      EM: error,
      DT: "",
    });
  }
};
const deleteProduct = async (req, res) => {
  try {
    const productId = req.params.id;
    const data = req.body;
    if (!productId) {
      return res.status(200).json({
        EC: "ERR",
        EM: "The productId is required!",
        DT: "",
      });
    }

    const result = await ProductServices.deleteProduct(productId, data);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({
      EC: "ERR",
      EM: error,
      DT: "",
    });
  }
};

module.exports = {
  getAllProduct,
  getDetailProduct,
  createProduct,
  updateProduct,
  deleteProduct,
};
