const { Schema, model } = require("mongoose");
const userSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: String, required: true },
    address: { type: String },
    avata: { type: String },
    status: { type: String },
    isAdmin: { type: Boolean },
  },
  {
    timestamps: true,
  }
);
const User = model("User", userSchema);
module.exports = User;
