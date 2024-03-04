//import kebutuhan
import express from "express";

//2. masukan controller untuk mendapatkan mengelola Product
import {
  getProductMenu,
  createProductMenu,
  destroyData,
} from "../controllers/ProductMenuControllers.js";

import { verifyUser } from "../middleware/AuthUser.js";

//definisikan router
const router = express.Router();

// 1. buat rute untuk mengarahkan ke fungsi getProducts padacontroller
router.get("/product-menu", verifyUser, getProductMenu);
router.post("/product-menu/send", verifyUser, createProductMenu);
router.delete("/product-menu/destroy/:id", verifyUser, destroyData);

//tampilkan data yang diproses
export default router;
