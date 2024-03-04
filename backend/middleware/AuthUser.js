import User from "../models/UserModel.js";

export const verifyUser = async (req, res, next) => {
  if (!req.session.sid) {
    const sesi = req.session.sid;
    return res.status(401).json({ sesi, message: "Mohon login ke akun Anda!" });
  }
  const user = await User.findOne({
    where: {
      uuid: req.session.sid,
    },
  });
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
  req.sid = user.uuid;
  req.role = user.role;
  next();
};

export const adminOnly = async (req, res, next) => {
  const user = await User.findOne({
    where: {
      uuid: req.session.sid,
    },
  });
  if (!user) return res.status(404).json({ msg: "User tidak ditemukan" });
  if (user.role !== "admin")
    return res.status(403).json({ msg: "Akses terlarang" });
  next();
};
