const jwt = require("jsonwebtoken");
require("dotenv").config();

const authMiddleware = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1]; // Lấy token từ Header

  if (!token) {
    return res.status(401).json({ message: "Bạn chưa đăng nhập" });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded; // Lưu thông tin user vào request
    next();
  } catch (error) {
    res.status(403).json({ message: "Token không hợp lệ" });
  }
};

module.exports = authMiddleware;
