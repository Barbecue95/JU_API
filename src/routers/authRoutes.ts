import express from "express";
import { login, register } from "../handlers/auth";

const router = express.Router();

// 📝 Register Route (Fixed)
router.post("/register", register);

// 🔐 Login Route (Fixed)
router.post("/login", login);

export default router;
