const routerUser = require("./user.router");
const routerProduct = require("./product.router");

const routerAPI = (app) => {
  app.use("/v1/api/user", routerUser);
  app.use("/v1/api/product", routerProduct);
};

module.exports = routerAPI;
