const express = require("express");
const routerUser = express.Router();
const UserController = require("../controllers/user.controller");
const delay1s = require("../utils/delay");
const { authUserMiddleWare } = require("../middleware/authMiddleware");

routerUser.post("/login", delay1s, UserController.loginUser);
routerUser.post("/register", delay1s, UserController.registerUser);
routerUser.post("/refresh-token", UserController.refreshToken);
routerUser.post("/update/:id", UserController.updateUser);
routerUser.put("/admin-update/:id", delay1s, authUserMiddleWare, UserController.updateUser);

routerUser.get("/all", UserController.getAllUser);
routerUser.get("/detail/:id", authUserMiddleWare, UserController.getDetailUser);
routerUser.get("/get-detail/:id", delay1s, UserController.getDetailUser);
routerUser.get("/logout", delay1s, UserController.logoutUser);

module.exports = routerUser;
