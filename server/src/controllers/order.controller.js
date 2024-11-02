const OrderServices = require("../services/order.service");

const create = async (req, res) => {
  try {
  } catch (error) {
    return res.status(404).json({
      EC: "ERR",
      EM: error,
      DT: "",
    });
  }
};

module.exports = {
  create,
};
