const routerUser = require("./userRouter");

const routerAPI = (app) => {
  app.use("/v1/api/user", routerUser);
};

module.exports = routerAPI;
