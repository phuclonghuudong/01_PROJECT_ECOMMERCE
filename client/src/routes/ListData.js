const listSize = [
  { id: "1", name: "S", status: true },
  { id: "2", name: "M", status: false },
  { id: "3", name: "L", status: false },
  { id: "4", name: "XL", status: false },
  { id: "5", name: "2XL", status: true },
  { id: "6", name: "3XL", status: true },
];
const listType = [
  { id: "CL", name: "Cầu Lông", status: true },
  { id: "VCL", name: "Vợt Cầu Lông", status: false },
  { id: "QU", name: "Quần", status: false },
  { id: "AO", name: "Áo", status: false },
  { id: "GI", name: "Giày", status: false },
  { id: "PK", name: "Phụ Kiện", status: true },
];
const listColor = [
  { id: "white", name: "Trắng", status: true },
  { id: "red", name: "Đỏ", status: false },
  { id: "blue", name: "Xanh", status: false },
  { id: "yellow", name: "Vàng", status: false },
  { id: "orange", name: "Cam", status: false },
  { id: "pink", name: "Hồng", status: true },
  { id: "black", name: "Đen", status: true },
];
const listRole = [
  { id: true, name: "Admin", status: true },
  { id: false, name: "User", status: true },
];
const listStatus = [
  { id: "2", name: "Tạm khóa", status: true },
  { id: "1", name: "Hoạt động", status: true },
  { id: "0", name: "Dừng hoạt động", status: true },
];
export { listSize, listType, listColor, listRole, listStatus };
