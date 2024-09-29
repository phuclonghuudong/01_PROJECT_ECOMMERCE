const ProductServices = require("../services/ProductService");

const createProduct = async (req, res) => {
  try {
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
