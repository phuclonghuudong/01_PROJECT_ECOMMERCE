require("dotenv").config();
const jwt = require("jsonwebtoken");

const ACCESS_TOKEN = async (payload) => {
  const access = await jwt.sign(payload, process.env.ACCESS_TOKEN, { expiresIn: process.env.JWT_EXPIRE_ACCESS });
  return access;
};
const REFRESH_TOKEN = async (payload) => {
  const access = await jwt.sign(payload, process.env.REFRESH_TOKEN, { expiresIn: process.env.JWT_EXPIRE_REFRESH });
  return access;
};

const VERIFY_TOKEN = async (token) => {
  const decoded = await jwt.verify(token, process.env.REFRESH_TOKEN);
  return decoded;
};

module.exports = {
  ACCESS_TOKEN,
  REFRESH_TOKEN,
  VERIFY_TOKEN,
};
