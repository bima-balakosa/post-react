// 1. import kebutuhan
import { Sequelize } from "sequelize";
import db from "../config/Database.js";

// 2. definisikan tipe data
const { DataTypes } = Sequelize;

// 3. definisikan tabel dan data apa yang mau diambil
const ProductMenu = db.define(
  // ada di tabel (DB) database mana dia?
  "productmenus",
  {
    product_id: DataTypes.STRING,
    product_name: DataTypes.STRING,
    product_price: DataTypes.INTEGER,
    product_price_packet: DataTypes.INTEGER,
  },
  {
    freezeTableName: true,
  }
);

// tampilkan datanya
export default ProductMenu;

// kalau tidak ada data, maka buatkan data yang sudah ditentukan
// (async () => {
//   try {
//     await ProductMenu.sync({ alter: true });
//     console.log("Alter table berhasil!");
//   } catch (error) {
//     console.error("Terjadi kesalahan saat melakukan alter table:", error);
//   }
// })();
