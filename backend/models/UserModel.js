// import kebutuhan
import { Sequelize } from "sequelize";
import db from "../config/Database.js";

//definisikan tipe data
const { DataTypes } = Sequelize;

// definisikan tabel dan data apa yang mau diambil
const User = db.define(
  "users",
  {
    uuid: {
      type: DataTypes.STRING,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    user_name: DataTypes.STRING,
    user_password: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
    user_profile: DataTypes.STRING,
    role: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        notEmpty: true,
      },
    },
  },
  {
    freezeTableName: true,
  }
);

// tampilkan datanya
export default User;

// kalau tidak ada data, maka buatkan data yang sudah ditentukan
// (async () => {
//   try {
//     await User.sync({ alter: true });
//     console.log("Alter table berhasil!");
//   } catch (error) {
//     console.error("Terjadi kesalahan saat melakukan alter table:", error);
//   }
// })();
