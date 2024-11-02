const routerUser = require("./user.router");
const routerProduct = require("./product.router");
const routerOrder = require("./order.router");

const routerAPI = (app) => {
  app.use("/v1/api/user", routerUser);
  app.use("/v1/api/product", routerProduct);
  app.use("/v1/api/order", routerOrder);
};

module.exports = routerAPI;
