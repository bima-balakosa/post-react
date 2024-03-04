// 1. import kebutuhan
import { Sequelize } from "sequelize";
import db from "../config/Database.js";

// 2. definisikan tipe data
const { DataTypes } = Sequelize;

// 3. definisikan tabel dan data apa yang mau diambil
const Packet = db.define(
  // ada di tabel (DB) database mana dia?
  "packets",
  {
    user_id: DataTypes.STRING,
    user_name: DataTypes.STRING,
    product_id: DataTypes.STRING,
    product_name: DataTypes.STRING,
    product_price: DataTypes.INTEGER,
    product_qty: DataTypes.INTEGER,
    product_taked: DataTypes.INTEGER,
    product_total: DataTypes.INTEGER,
    transaction_type: DataTypes.STRING,
  },
  {
    freezeTableName: true,
  }
);

// tampilkan datanya
export default Packet;

// kalau tidak ada data, maka buatkan data yang sudah ditentukan
// (async () => {
//   try {
//     await Packet.sync({ alter: true });
//     console.log("Alter table berhasil!");
//   } catch (error) {
//     console.error("Terjadi kesalahan saat melakukan alter table:", error);
//   }
// })();
