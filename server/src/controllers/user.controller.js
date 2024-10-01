const UserServices = require("../services/user.service");

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    if (!email || !password) {
      return res.status(200).json({
        EC: "ERR",
        EM: "The input is required",
        DT: "",
      });
    }
    const result = await UserServices.loginUser(req.body);

    const { REFRESH_TOKEN, ...newResult } = result.DT;

    res.cookie("refresh_token", REFRESH_TOKEN, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });
    return res.status(200).json({
      EC: result.EC,
      EM: result.EM,
      DT: newResult,
    });
  } catch (error) {
    return res.status(404).json({
      EC: "ERR",
      EM: error,
      DT: "",
    });
  }
};
const registerUser = async (req, res) => {
  const { username, email, phone, password } = req.body;
  try {
    if (!email || !password || !phone || !username) {
      return res.status(200).json({
        EC: "ERR",
        EM: "The input is required",
        DT: "",
      });
    }

    const result = await UserServices.registerUser(req.body);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({
      EC: "ERR",
      EM: error,
      DT: "",
    });
  }
};
const logoutUser = async (req, res) => {
  try {
    res.clearCookie("refresh_token");

    return res.status(200).json({
      EC: 0,
      EM: "LOGOUT SUCCESS",
      DT: "",
    });
  } catch (error) {
    return res.status(404).json({
      EC: "ERR",
      EM: error,
      DT: "",
    });
  }
};
const refreshToken = async (req, res) => {
  try {
    const result = await UserServices.refreshToken(req.cookies);

    const { REFRESH_TOKEN, ...newResult } = result?.DT;

    res.cookie("refresh_token", REFRESH_TOKEN, {
      httpOnly: true,
      secure: false,
      sameSite: "strict",
      maxAge: 24 * 60 * 60 * 1000,
    });
    return res.status(200).json({
      EC: result.EC,
      EM: result.EM,
      DT: newResult,
    });
  } catch (error) {
    return res.status(404).json({
      EC: "ERR",
      EM: error,
      DT: "",
    });
  }
};
const updateUser = async (req, res) => {
  try {
    const userId = req.params.id;
    const data = req.body;
    if (!productId) {
      return res.status(200).json({
        EC: "ERR",
        EM: "The userId is required!",
        DT: "",
      });
    }

    const result = await UserServices.updateUser(userId, data);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({
      EC: "ERR",
      EM: error,
      DT: "",
    });
  }
};
const getDetailUser = async (req, res) => {
  try {
    if (!req.params.id) {
      return res.status(200).json({
        EC: "ERR",
        EM: "Id không tồn tại!",
        DT: "",
      });
    }
    const result = await UserServices.getDetailUser(req.params.id);
    return res.status(200).json(result);
  } catch (error) {
    return res.status(404).json({
      EC: "ERR",
      EM: error,
      DT: "",
    });
  }
};
const getAllUser = async (req, res) => {
  try {
    const result = await UserServices.getAllUser();
    return res.status(200).json({ ...result });
  } catch (error) {
    return res.status(404).json({
      EC: "ERR",
      EM: error,
      DT: "",
    });
  }
};

module.exports = {
  loginUser,
  registerUser,
  logoutUser,
  refreshToken,
  getDetailUser,
  getAllUser,
  updateUser,
};
