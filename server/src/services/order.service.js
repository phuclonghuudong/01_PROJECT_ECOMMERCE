const Order = require("../models/order.model");

const create = async (data) => {
  // const { paymentMethod, itemsPrice, shippingPrice, taxPrice, totalPrice, fullname, address, phone } = data;
  // console.log(data);
  try {
    // const checkProduct = await Order.findOne({ id: data?.product });
    // if (checkProduct !== null) {
    //   return {
    //     EC: "ERR",
    //     EM: "The product is already!",
    //     DT: "",
    //   };
    // }
    const result = await Order.create({
      orderItems: data?.orderItems,
      shippingAddress: {
        fullname: data?.fullname,
        address: data?.address,
        phone: data?.phone,
      },
      paymentMethod: data?.paymentMethod,
      itemsPrice: data?.itemsPrice,
      shippingPrice: data?.shippingPrice,
      totalPrice: data?.totalPrice,
      user: data?.userId,
    });

    return {
      EC: 0,
      EM: "Chúc mừng. Bạn đã mua hàng thành công!",
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
const getOrderByUser = async (id) => {
  try {
    const result = await Order.find({ user: id }).sort({ createdAt: -1 });
    return {
      EC: 0,
      EM: "SUCCESS",
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
  getOrderByUser,
};
