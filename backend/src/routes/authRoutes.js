const express = require("express");
const authController = require("../controllers/authController");

const router = express.Router();

// Endpoint đăng ký
router.post("/register", authController.register);

// Endpoint đăng nhập
router.post("/login", authController.login);

module.exports = router;
