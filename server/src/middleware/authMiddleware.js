require("dotenv").config();
const jwt = require("jsonwebtoken");

const authMiddleWare = (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(404).json({
      EC: "ERR",
      EM: "The Authentication does not exist",
    });
  }
  const decoded = jwt.verify(token.split(" ")[1], process.env.ACCESS_TOKEN);

  if (!decoded) {
    return res.status(404).json({
      EC: "ERR",
      EM: "The Authentication decode!",
    });
  }

  if (decoded?.isAdmin === true) {
    next();
  } else {
    return res.status(404).json({
      EC: "ERR",
      EM: "The Authentication",
    });
  }
};
const authUserMiddleWare = async (req, res, next) => {
  const token = req.headers.authorization.split(" ")[1];
  const userId = req.params.id;

  if (!token) {
    return res.status(404).json({
      EC: "ERR",
      EM: "The Authentication does not exist",
    });
  }
  if (!userId) {
    return res.status(404).json({
      EC: "ERR",
      EM: "The userId does not exist",
    });
  }

  try {
    const decoded = await jwt.verify(token, process.env.ACCESS_TOKEN);

    if (!decoded) {
      return res.status(404).json({
        EC: "ERR",
        EM: "The Authentication CHECK",
      });
    }
    // if (String(decoded?.id) === String(userId)) {
    next();
    // }
  } catch (error) {
    return res.status(404).json({
      EC: "ERR",
      EM: "The Authentication not exist",
    });
  }

  // if (String(decoded?.id) === String(userId)) {
  //   next();
  // } else {
  //   return res.status(404).json({
  //     EC: "ERR",
  //     EM: "The Authentication not exist",
  //   });
  // }
};

module.exports = {
  authMiddleWare,
  authUserMiddleWare,
};
