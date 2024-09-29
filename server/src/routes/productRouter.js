const express = require("express");
const routerProduct = express.Router();
const ProductController = require("../controllers/ProductController");

routerProduct.post("/create", ProductController.createProduct);
routerProduct.post("/update/:id", ProductController.updateProduct);
routerProduct.post("/delete/:id", ProductController.deleteProduct);

routerProduct.get("/all", ProductController.getAllProduct);
routerProduct.get("/detail/:id", ProductController.getDetailProduct);

module.exports = routerProduct;
