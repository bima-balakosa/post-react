// controllers/authController.js
import User from "../models/UserModel.js";
import argon2 from "argon2";

export const Login = async (req, res) => {
  const user = await User.findOne({
    where: {
      user_name: req.body.username,
    },
  });
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
  const match = await argon2.verify(user.user_password, req.body.password);
  if (!match) return res.status(400).json({ msg: "Wrong Password" });
  req.session.sid = user.uuid;
  const sesi = req.session.sid;
  const uuid = user.uuid;
  const user_name = user.user_name;
  const role = user.role;
  const user_profile = user.user_profile;
  res
    .status(200)
    .json({ sesi, uuid, user_name, role, user_profile, message: "Login successful" });
};

export const Me = async (req, res) => {
  if (!req.session.sid) {
    return res.status(401).json({ msg: "Mohon login ke akun Anda!" });
  }
  const user = await User.findOne({
    attributes: ["uuid", "user_name", "role", "user_profile"],
    where: {
      uuid: req.session.sid,
    },
  });
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
  res.status(200).json(user);
};

// Rute untuk logout
export const Logout = (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.status(400).json({ msg: "Tidak dapat logout" });
    res.status(200).json({ msg: "Anda telah logout" });
  });
};
