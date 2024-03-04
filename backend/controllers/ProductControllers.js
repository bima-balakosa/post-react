import Product from "../models/ProductModel.js";

export const getProducts = async (req, res) => {
  try {
    const response = await Product.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const createProduct = async (req, res) => {
  try {
    await Product.create(req.body);
    res.status(200).json({ msg: "Produk Ditambahkan" });
  } catch (error) {
    console.log(error.message);
  }
};

export const destroyData = async (req, res) => {
  try {
    await Product.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json({ msg: "Data Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
