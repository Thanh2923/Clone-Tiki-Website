const express = require('express');
const productController = require('../controllers/productController');
const router = express.Router();

// Lấy tất cả sản phẩm
router.get('/', productController.getProducts);
router.get('/:id', productController.getProductById);

// Tạo sản phẩm mới
router.post('/', productController.createProduct);

// Cập nhật sản phẩm
router.put('/:id', productController.updateProduct);

// Xóa sản phẩm
router.delete('/:id', productController.deleteProduct);

module.exports = router;
