import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  orderItems: [],
  shippingAddress: {},
  paymentMethod: "",
  itemsPrice: 0, //Giá sản phẩm
  shippingPrice: 0, //phí giao hàng
  taxPrice: 0, //Phí thuế
  totalPrice: 0, //Tổng tiền trước & sau
  user: "",
  isPaid: false, //Thanh toán hay chưa
  paidAt: "",
  isDelivered: false, //Thời gian thanh toán
  deliveredAt: "",
};

export const OrderSlice = createSlice({
  name: "order",
  initialState,
  reducers: {
    addOrderProduct: (state, action) => {
      const { orderItems } = action.payload;
      const itemOrder = state?.orderItems?.find((item) => item?.product === orderItems.product);
      if (itemOrder) {
        itemOrder.amount += orderItems.amount;
      } else {
        state.orderItems.push(orderItems);
      }
    },
    increaseAmount: (state, action) => {
      const { idProduct } = action.payload;

      const itemOrder = state?.orderItems?.find((item) => item?.product === idProduct);
      itemOrder.amount++;
    },
    decreaseAmount: (state, action) => {
      const { idProduct } = action.payload;

      const itemOrder = state?.orderItems?.find((item) => item?.product === idProduct);
      itemOrder.amount--;
    },
    removeOrderProduct: (state, action) => {
      const { idProduct } = action.payload;
      const itemOrder = state?.orderItems?.filter((item) => item?.product !== idProduct);
      state.orderItems = itemOrder;
    },
    removeAllOrderProduct: (state, action) => {
      const { listChecked } = action.payload;
      const itemOrders = state?.orderItems?.filter((item) => !listChecked.includes(item.product));
      state.orderItems = itemOrders;
    },
  },
});

export const { addOrderProduct, removeOrderProduct, decreaseAmount, increaseAmount, removeAllOrderProduct } =
  OrderSlice.actions;

export default OrderSlice.reducer;
