const { ACCESS_TOKEN, REFRESH_TOKEN, VERIFY_TOKEN } = require("../middleware/JWTToken");
const User = require("../models/user.model");
const { comparePassword, hashPassword } = require("../utils/isValidInput");

const loginUser = async (data) => {
  const { email, password } = data;
  try {
    const checkUser = await User.findOne({ email });
    if (!checkUser) {
      return {
        EC: "ERR",
        EM: "User not found. Email not exists!",
        DT: "",
      };
    }

    if (checkUser?.password) {
      const checkPassword = await comparePassword(password, checkUser?.password);

      if (!checkPassword) {
        return {
          EC: "ERR",
          EM: "Email/Password invalid",
          DT: "",
        };
      }
    }
    const payload = {
      id: checkUser?._id,
      email: checkUser?.email,
      username: checkUser?.username,
      phone: checkUser?.phone,
      isAdmin: checkUser?.isAdmin,
    };
    const accessToken = await ACCESS_TOKEN(payload);
    const refreshToken = await REFRESH_TOKEN(payload);
    return {
      EC: 0,
      EM: "LOGIN SUCCESS!",
      DT: {
        USER: {
          email: checkUser.email,
          userame: checkUser.username,
          phone: checkUser.phone,
          isAdmin: checkUser.isAdmin,
        },
        ACCESS_TOKEN: accessToken,
        REFRESH_TOKEN: refreshToken,
      },
    };
  } catch (error) {
    return {
      EC: "ERR",
      EM: error,
      DT: "",
    };
  }
};
const registerUser = async (data) => {
  const { username, email, phone, password } = data;
  try {
    const checkEmail = await User.findOne({ email });
    const checkPhone = await User.findOne({ phone });
    const hassPassword = await hashPassword(password);

    if (checkEmail !== null) {
      return {
        EC: "ERR",
        EM: "Email exists!",
        DT: "",
      };
    }
    if (checkPhone !== null) {
      return {
        EC: "ERR",
        EM: "Phone exists!",
        DT: "",
      };
    }

    const result = await User.create({
      username: username,
      email: email,
      phone: phone,
      password: hassPassword,
      status: 1,
      address: "",
      avatar: "",
      isAdmin: false,
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
const updateUser = async (id, data) => {
  try {
    const checkUser = await User.findOne({ _id: id });
    console.log("object", id);
    if (checkUser === null) {
      return {
        EC: "ERR",
        EM: "The user is not defined!",
        DT: "",
      };
    }
    const result = await User.findByIdAndUpdate(id, data, { new: true });
    return {
      EC: 0,
      EM: "UPDATE SUCCESS",
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
const refreshToken = async (data) => {
  try {
    const result = await VERIFY_TOKEN(data.refresh_token);

    const payload = {
      id: result?._id,
      email: result?.email,
      username: result?.username,
      phone: result?.phone,
      isAdmin: result?.isAdmin,
    };
    const accessToken = await ACCESS_TOKEN(payload);
    const refreshToken = await REFRESH_TOKEN(payload);

    return {
      EC: 0,
      EM: "REFRESH TOKEN SUCCESS!",
      DT: {
        ACCESS_TOKEN: accessToken,
        REFRESH_TOKEN: refreshToken,
      },
    };
  } catch (error) {
    return {
      EC: "ERR",
      EM: error,
      DT: "",
    };
  }
};
const getDetailUser = async (id) => {
  try {
    const result = await User.findOne({ _id: id }).select("-password");
    if (!result) {
      return {
        EC: "ERR",
        EM: "ERROR",
        DT: "",
      };
    }

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

const getAllUser = async (limit, page, sort, filter) => {
  try {
    const totalUser = await User.countDocuments();

    if (filter) {
      const resultFilter = await User.find({ [filter[0]]: { $regex: filter[1], $options: "i" } });

      return {
        EC: 0,
        EM: "SUCCESS",
        DT: {
          data: resultFilter,
          total: resultFilter.length,
          pageCurrent: Number(page + 1),
          totalPage: Math.ceil(totalUser / limit),
        },
      };
    }
    if (sort) {
      const objSort = {};
      objSort[sort[1]] = sort[0];
      const resultSort = await User.find()
        .limit(limit)
        .skip(page * limit)
        .sort(objSort);
      return {
        EC: 0,
        EM: "SUCCESS",
        DT: {
          data: resultSort,
          total: resultSort.length,
          pageCurrent: Number(page + 1),
          totalPage: Math.ceil(totalUser / limit),
        },
      };
    }
    const result = await User.find()
      .limit(limit)
      .skip(page * limit);

    return {
      EC: 0,
      EM: "SUCCESS",
      DT: {
        data: result,
        total: totalUser,
        pageCurrent: Number(page + 1),
        totalPage: Math.ceil(totalUser / limit),
      },
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
  loginUser,
  registerUser,
  updateUser,
  refreshToken,
  getDetailUser,
  getAllUser,
};
