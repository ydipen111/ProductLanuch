import express from "express";
import { getProducts } from "../Controllers/productController.js";

const router = express.Router();


router.route('/products').get(getProducts)

export default router;