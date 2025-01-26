const express = require('express');
const brandController = require('../controllers/brandController');
const router = express.Router();

// Lấy tất cả các thương hiệu
router.get('/:id', brandController.getAllBrands);

// Tạo một thương hiệu mới
router.post('/', brandController.createBrand);

// Cập nhật thương hiệu
router.put('/:id', brandController.updateBrand);

// Xóa thương hiệu
router.delete('/:id', brandController.deleteBrand);

module.exports = router;
