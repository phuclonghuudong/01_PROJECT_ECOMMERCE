const express = require("express");
const routerProduct = express.Router();
const ProductController = require("../controllers/product.controller");
const delay1s = require("../utils/delay");

routerProduct.post("/create", delay1s, ProductController.createProduct);
routerProduct.put("/update/:id", delay1s, ProductController.updateProduct);
routerProduct.post("/delete/:id", delay1s, ProductController.deleteProduct);

routerProduct.get("/all", ProductController.getAllProduct);
routerProduct.get("/detail/:id", ProductController.getDetailProduct);

module.exports = routerProduct;
