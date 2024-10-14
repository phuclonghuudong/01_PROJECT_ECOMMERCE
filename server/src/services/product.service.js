const Product = require("../models/product.model");

const createProduct = async (data) => {
  const { id, name, image, type, color, size, countInStock, price, rating, description } = data;

  try {
    const checkProduct = await Product.findOne({ id: id });
    if (checkProduct !== null) {
      return {
        EC: "ERR",
        EM: "The product is already!",
        DT: "",
      };
    }
    const result = await Product.create({
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
const updateProduct = async (id, data) => {
  try {
    const checkProduct = await Product.findOne({ _id: id });
    if (checkProduct === null) {
      return {
        EC: "ERR",
        EM: "The product is not defined!",
        DT: "",
      };
    }
    const result = await Product.findByIdAndUpdate(id, data, { new: true });

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
const deleteProduct = async (id, data) => {
  try {
    const checkProduct = await Product.findOne({ _id: id });
    if (checkProduct === null) {
      return {
        EC: "ERR",
        EM: "The product is not defined!",
        DT: "",
      };
    }
    const result = await Product.findByIdAndDelete(id, data, { new: true });
    return {
      EC: 0,
      EM: "DELETE SUCCESS",
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
const getAllProduct = async (limit, page, sort, filter) => {
  try {
    const totalProduct = await Product.countDocuments();

    if (filter) {
      const resultFilter = await Product.find({ [filter[0]]: { $regex: filter[1] } });

      return {
        EC: 0,
        EM: "SUCCESS",
        DT: {
          data: resultFilter,
          total: totalProduct,
          pageCurrent: Number(page + 1),
          totalPage: Math.ceil(totalProduct / limit),
        },
      };
    }
    if (sort) {
      const objSort = {};
      objSort[sort[1]] = sort[0];
      const resultSort = await Product.find()
        .limit(limit)
        .skip(page * limit)
        .sort(objSort);
      return {
        EC: 0,
        EM: "SUCCESS",
        DT: {
          data: resultSort,
          total: totalProduct,
          pageCurrent: Number(page + 1),
          totalPage: Math.ceil(totalProduct / limit),
        },
      };
    }
    const result = await Product.find()
      .limit(limit)
      .skip(page * limit);

    return {
      EC: 0,
      EM: "SUCCESS",
      DT: {
        data: result,
        total: totalProduct,
        pageCurrent: Number(page + 1),
        totalPage: Math.ceil(totalProduct / limit),
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
const getDetailProduct = async (id) => {
  try {
    const result = await Product.findOne({ _id: id });
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
module.exports = {
  createProduct,
  updateProduct,
  deleteProduct,
  getAllProduct,
  getDetailProduct,
};
