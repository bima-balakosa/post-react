//import data dari database dengan model
import User from "../models/UserModel.js";
import argon2 from "argon2";

//fungsi untuk mengambil data dari database yang diambil dengan model
export const getUsers = async (req, res) => {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const addUser = async (req, res) => {
  try {
    // Destructure body object
    const { user_name, role, user_password } = req.body;

    // Hash password with the generated salt
    const hashedPassword = await argon2.hash(user_password);

    // Create user with hashed password
    await User.create({
      user_name,
      role,
      user_password: hashedPassword, // Simpan hashed password ke dalam database
    });

    res.status(200).json({ msg: "User Created" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ msg: "Internal Server Error" });
  }
};

export const destroyUser = async (req, res) => {
  try {
    await User.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json({ msg: "User Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};

export const getUserById = async (req, res) => {
  try {
    const response = await User.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const updateUser = async (req, res) => {
  try {
    await User.update({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "User Updated" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const uploadProfile = async (req, res) => {
  try {
    const { file } = req;
    const { id } = req.params;

    if (!file) {
      return res.status(400).json({ message: "Tidak ada file yang diunggah" });
    }

    // Perbarui kolom user_profile berdasarkan ID yang dikirim dari endpoint
    const [updatedRows] = await User.update(
      { user_profile: file.filename },
      { where: { id } }
    );

    if (updatedRows === 0) {
      return res.status(404).json({ message: "Pengguna tidak ditemukan" });
    }

    return res.json({ message: "Gambar berhasil diunggah dan disimpan" });
  } catch (error) {
    console.error("Error saat mengunggah gambar:", error);
    return res.status(500).json({ message: "Gagal mengunggah gambar" });
  }
};
