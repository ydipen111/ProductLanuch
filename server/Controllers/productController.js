import Product from "../Models/Product.js";

export const getProducts = async (req, res) => {

  try {

    const page = req.page || 1;
    const limit = req.limit || 1;
    const skip = (limit - 1) * page;

    const response = await Product.find().limit(limit).skip(skip);
    return res.status(200).json({
      length: response.length,
      product: response
    })

  } catch (error) {

  }
}