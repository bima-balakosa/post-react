//import data dari database dengan model
import ProductMenu from "../models/ProductMenuModel.js";

//fungsi untuk mengambil data dari database yang diambil dengan model
// 1. Buat fungsi getProduct untuk mengambil data di database
export const getProductMenu = async (req, res) => {
  try {
    // 2. tambahkan fungsi "temukan semua" untuk membaca semua data yang ada di DB
    const response = await ProductMenu.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// 1. Buat logika untuk menambahkan data
export const createProductMenu = async (req, res) => {
  const { product_id } = req.body;

  try {
    // Lakukan validasi apakah product_id sudah ada dalam database sebelum mencoba membuat produk baru
    const existingProduct = await ProductMenu.findOne({
      where: { product_id },
    });

    if (existingProduct) {
      return res
        .status(400)
        .json({ error: "Product ID sudah digunakan. Pilih ID lain." });
    }

    // Jika product_id belum ada, maka buat produk baru
    await ProductMenu.create(req.body);
    res.status(200).json({ msg: "Produk Ditambahkan" });
  } catch (error) {
    console.log(error.message);
    res
      .status(500)
      .json({ error: "Terjadi kesalahan saat menambahkan produk." });
  }
};

export const destroyData = async (req, res) => {
  try {
    await ProductMenu.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json({ msg: "Data Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
