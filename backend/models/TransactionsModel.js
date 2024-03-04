// 1. import kebutuhan
import { Sequelize } from "sequelize";
import db from "../config/Database.js";

// 2. definisikan tipe data
const { DataTypes } = Sequelize;

// 3. definisikan tabel dan data apa yang mau diambil
const Transaction = db.define(
  // ada di tabel (DB) database mana dia?
  "transactions",
  {
    user_id: DataTypes.STRING,
    user_name: DataTypes.STRING,
    product_id: DataTypes.STRING,
    product_name: DataTypes.STRING,
    product_price: DataTypes.INTEGER,
    product_qty: DataTypes.INTEGER,
    product_total: DataTypes.INTEGER,
    status: DataTypes.INTEGER,
    transaction_type: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

// tampilkan datanya
export default Transaction;

// kalau tidak ada data, maka buatkan data yang sudah ditentukan
// (async () => {
//   try {
//     await Transaction.sync({ alter: true });
//     console.log("Alter table berhasil!");
//   } catch (error) {
//     console.error("Terjadi kesalahan saat melakukan alter table:", error);
//   }
// })();
