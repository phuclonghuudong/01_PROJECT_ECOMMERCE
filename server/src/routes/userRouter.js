const express = require("express");
const routerUser = express.Router();
const UserController = require("../controllers/UserController");

routerUser.post("/login", UserController.loginUser);
routerUser.post("/register", UserController.registerUser);
routerUser.post("/refresh-token", UserController.refreshToken);
routerUser.post("/update/:id", UserController.updateUser);

routerUser.get("/all", UserController.getAllUser);
routerUser.get("/detail/:id", UserController.getDetailUser);
routerUser.get("/logout", UserController.logoutUser);

module.exports = routerUser;
