const mongoose = require("mongoose");
const orderShema = new mongoose.Schema(
  {
    orderItems: [
      {
        name: { type: String, required: true },
        amount: { type: Number, required: true },
        image: { type: String, required: true },
        size: { type: String, required: true },
        color: { type: String, required: true },
        price: { type: Number, required: true },
        product: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "Product",
          required: true,
        },
      },
    ],
    shippingAddress: {
      fullname: { type: String, required: true },
      address: { type: String, required: true },
      // city: { type: String, required: true },
      // country: { type: String, required: true },
      phone: { type: Number, required: true },
    },
    paymentMethod: { type: String, required: true },
    itemsPrice: { type: Number, required: true }, //Giá sản phẩm
    shippingPrice: { type: Number, required: true }, //phí giao hàng
    totalPrice: { type: Number, required: true }, //Tổng tiền trước & sau
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isPaid: { type: Boolean, default: false }, //Thanh toán hay chưa
    paidAt: { type: Date },
    isDelivered: { type: Boolean, default: false }, //Thời gian thanh toán
    deliveredAt: { type: Date },
  },
  {
    timestamps: true,
  }
);
const Order = mongoose.model("Order", orderShema);
module.exports = Order;
