import Transaction from "../models/TransactionsModel.js";
import Product from "../models/ProductModel.js";
import { Op } from "sequelize";

export const getTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.findAll();
    res.status(200).json(transactions);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Fungsi untuk menambahkan transaksi ke database
export const addTransactions = async (req, res) => {
  try {
    await Transaction.create(req.body);
    res.status(200).json({ msg: "Transaksi Dibuat" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getTotalStokByProductId = async (req, res) => {
  const productId = "01"; // Ganti dengan product_id yang Anda inginkan

  try {
    const products = await Product.findAll({
      where: {
        product_id: productId,
      },
    });

    let totalStok = 0;
    for (const product of products) {
      totalStok += product.product_stok;
    }

    res.status(200).json({ totalStok });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getTotalStokByProductId02 = async (req, res) => {
  const productId = "02"; // Ganti dengan product_id yang Anda inginkan

  try {
    const products = await Product.findAll({
      where: {
        product_id: productId,
      },
    });

    let totalStok = 0;
    for (const product of products) {
      totalStok += product.product_stok;
    }

    res.status(200).json({ totalStok });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getTotalStokByProductId03 = async (req, res) => {
  const productId = "03"; // Ganti dengan product_id yang Anda inginkan

  try {
    const products = await Product.findAll({
      where: {
        product_id: productId,
      },
    });

    let totalStok = 0;
    for (const product of products) {
      totalStok += product.product_stok;
    }

    res.status(200).json({ totalStok });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getTotalQtyByProductId = async (req, res) => {
  const productId = "01"; // Ganti dengan product_id yang Anda inginkan

  try {
    const transactions = await Transaction.findAll({
      where: {
        product_id: productId,
      },
    });

    let totalQty = 0;
    for (const transaction of transactions) {
      totalQty += transaction.product_qty;
    }

    res.status(200).json({ totalQty });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};
export const getTotalQtyByProductId02 = async (req, res) => {
  const productId = "02"; // Ganti dengan product_id yang Anda inginkan

  try {
    const transactions = await Transaction.findAll({
      where: {
        product_id: productId,
      },
    });

    let totalQty = 0;
    for (const transaction of transactions) {
      totalQty += transaction.product_qty;
    }

    res.status(200).json({ totalQty });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const getTotalQtyByProductId03 = async (req, res) => {
  const productId = "03"; // Ganti dengan product_id yang Anda inginkan

  try {
    const transactions = await Transaction.findAll({
      where: {
        product_id: productId,
      },
    });

    let totalQty = 0;
    for (const transaction of transactions) {
      totalQty += transaction.product_qty;
    }

    res.status(200).json({ totalQty });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Controller untuk mengambil jumlah qty berdasarkan ID 03 produk
export const getTotalTransactions = async (req, res) => {
  try {
    const transactions = await Transaction.findAll();

    let totalP = 0;
    for (const transaction of transactions) {
      totalP += transaction.product_total;
    }
    res.status(200).json({ totalP });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Hapus data
export const destroyData = async (req, res) => {
  try {
    await Transaction.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json({ msg: "Data Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

export const handleUpdateStatus = async (req, res) => {
  try {
    await Transaction.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Diubah menjadi Lunas" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const filterTransactions = async (req, res) => {
  try {
    const { keyword } = req.query;

    // Lakukan filter data transaksi menggunakan Sequelize
    const filteredTransactions = await Transaction.findAll({
      where: {
        [Op.or]: [
          {
            user_id: {
              [Op.like]: `%${keyword}%`,
            },
          },
          {
            user_name: {
              [Op.like]: `%${keyword}%`,
            },
          },
          {
            product_name: {
              [Op.like]: `%${keyword}%`,
            },
          },
          {
            status: {
              [Op.like]: `%${keyword}%`,
            },
          },
          // Tambahkan kolom-kolom lain yang ingin Anda cocokkan di sini
        ],
      },
    });
    res.status(200).json(filteredTransactions);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ error: "Terjadi kesalahan dalam filter data transaksi" });
  }
};
