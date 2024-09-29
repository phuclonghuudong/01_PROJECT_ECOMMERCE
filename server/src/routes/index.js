const routerUser = require("./userRouter");
const routerProduct = require("./productRouter");

const routerAPI = (app) => {
  app.use("/v1/api/user", routerUser);
  app.use("/v1/api/product", routerProduct);
};

module.exports = routerAPI;
