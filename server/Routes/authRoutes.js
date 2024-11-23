import express from "express";
import { login, signup } from "../Controllers/authController.js";

const router = express.Router();

router.route('/users/signup').post(signup)

router.route('/users/login').post(login)

export default router;