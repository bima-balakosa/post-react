import Packet from "../models/PacketModel.js";

// Fungsi untuk mengambil data dari database
export const getPackets = async (req, res) => {
  try {
    const packets = await Packet.findAll(); // Menggunakan findAll() dari Sequelize
    res.status(200).json(packets);
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

// Fungsi untuk mengambil data dari database
export const addedPackets = async (req, res) => {
  try {
    const response = await Packet.findAll(); // Menggunakan findAll() dari Sequelize
    res.status(200).json(response);
  } catch (error) {
    res.status(500).json({ msg: error.message });
  }
};

// Fungsi untuk menambahkan transaksi ke database
export const addPacket = async (req, res) => {
  try {
    await Packet.create(req.body);
    res.status(200).json({ msg: "Transaksi Dibuat" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const takePacket = async (req, res) => {
  try {
    const response = await Packet.findOne({
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

export const takedPackets = async (req, res) => {
  try {
    const response = await Packet.findAll({
      where: {
        transaction_type: "ambil",
      },
    });
    res.status(200).json(response);
  } catch (error) {
    console.log(error.message);
  }
};

// Fungsi untuk menambahkan transaksi ke database
export const updatePacket = async (req, res) => {
  try {
    await Packet.update(req.body, {
      where: {
        id: req.params.id,
      },
    });
    res.status(200).json({ msg: "Transaksi Dibuat" });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

export const destroyData = async (req, res) => {
  try {
    await Packet.destroy({
      where: { id: req.params.id },
    });
    res.status(200).json({ msg: "Data Deleted" });
  } catch (error) {
    console.log(error.message);
  }
};
