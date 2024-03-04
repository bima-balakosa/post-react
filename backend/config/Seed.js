import mysql from "mysql2"; //import mysql untuk buat seed data

// Buat seed data
const seedData = [
  {
    product_id: "id",
    product_name: "Pakan Finisher",
    product_price: 200000,
    product_qty: 20,
  },
  {
    product_id: "id",
    product_name: "Pakan Grower",
    product_price: 400000,
    product_qty: 30,
  },
  // Tambah lagi seed data kalau perlu
];

// buat koneksi dengan database
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "",
  database: "pos_db",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});

async function seedDatabase() {
  try {
    //hapus semua data sebelumnya pada tabel yang dimaksud
    await pool.promise().query("DELETE FROM transactions"); // Clear existing data before inserting seed data

    // buat query untuk create data pada tabel yang dimaksud
    const queryString =
      "INSERT INTO transactions (product_id, product_name, product_price, product_qty) VALUES ?";
    const values = seedData.map((item) => [
      item.product_id,
      item.product_name,
      item.product_price,
      item.product_qty,
    ]);

    // argumen pesan ketika data berhasil dibuat dan ketika gagal dibuat
    await pool.promise().query(queryString, [values]);
    console.log("Seed data berhasil dibuat");
  } catch (err) {
    console.error("Seed Data gagal dibuat:", err);
  } finally {
    pool.end(); // Tutup koneksi dengan databasenya setelah data berhasil dibuat
  }
}

seedDatabase();
