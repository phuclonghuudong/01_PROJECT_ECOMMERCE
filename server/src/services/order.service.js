const Order = require("../models/order.model");

const create = async (data, accessToken) => {
  const { id, name, image, type, color, size, countInStock, price, rating, description } = data;

  try {
    const checkProduct = await Order.findOne({ id: id });
    if (checkProduct !== null) {
      return {
        EC: "ERR",
        EM: "The product is already!",
        DT: "",
      };
    }
    const result = await Order.create({
      id: id,
      name: name,
      image: image,
      type: type,
      color: color,
      size: size,
      countInStock: countInStock,
      price: price,
      rating: rating,
      description: description,
    });
    return {
      EC: 0,
      EM: "CREATE SUCCESS",
      DT: result,
    };
  } catch (error) {
    return {
      EC: "ERR",
      EM: error,
      DT: "",
    };
  }
};

module.exports = {
  create,
};
