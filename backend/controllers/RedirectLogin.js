// middleware/redirectLogin.js
export const redirectLogin = (req, res, next) => {
  // Anda dapat menyesuaikan logika autentikasi sesuai kebutuhan aplikasi Anda.
  // Sebagai contoh, mari kita anggap ada properti user di objek req yang menyimpan informasi pengguna.
  if (req.user) {
    // Jika pengguna sudah login, lanjutkan ke rute berikutnya
    next();
  } else {
    // Jika pengguna belum login, redirect atau kirim pesan kesalahan

    // res.send("Anda belum login");
    res.redirect("/login");
  }
};
