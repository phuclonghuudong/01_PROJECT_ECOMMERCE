const { Schema, model } = require("mongoose");
const userSchema = new Schema(
  {
    username: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    phone: { type: Number, required: true },
    address: { type: String },
    avatar: { type: String },
    status: { type: String },
    isAdmin: { type: Boolean },
  },
  {
    timestamps: true,
  }
);
const User = model("User", userSchema);
module.exports = User;
