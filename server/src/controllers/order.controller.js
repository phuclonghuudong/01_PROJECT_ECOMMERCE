const OrderServices = require("../services/order.service");

const create = async (req, res) => {
  try {
    const { paymentMethod, itemsPrice, shippingPrice, totalPrice, fullname, address, phone } = req.body;
    if (!paymentMethod || !itemsPrice || !shippingPrice || !totalPrice || !fullname || !address || !phone) {
      return res.status(200).json({
        EC: "ERR",
        EM: "The input require!",
        DT: "",
      });
    }
    const result = await OrderServices.create(req.body);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({
      EC: "ERR",
      EM: error,
      DT: "",
    });
  }
};
const getOrderByUser = async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(200).json({
        EC: "ERR",
        EM: "User not exists!",
        DT: "",
      });
    }
    const result = await OrderServices.getOrderByUser(req.params.id);
    return res.status(200).json(result);
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
  getOrderByUser,
};
