const express = require("express");
const routerProduct = express.Router();
const ProductController = require("../controllers/product.controller");
const delay1s = require("../utils/delay");
const { authUserMiddleWare, authMiddleWare } = require("../middleware/authMiddleware");

routerProduct.post("/create", delay1s, authMiddleWare, ProductController.createProduct);
routerProduct.put("/update/:id", delay1s, authUserMiddleWare, ProductController.updateProduct);
routerProduct.delete("/delete/:id", delay1s, authMiddleWare, ProductController.deleteProduct);

routerProduct.get("/all", delay1s, ProductController.getAllProduct);
routerProduct.get("/get-all", delay1s, ProductController.getAllProductTable);
routerProduct.get("/detail/:id", delay1s, ProductController.getDetailProduct);

module.exports = routerProduct;
