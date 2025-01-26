const express = require('express');
const paymentController = require('../controllers/paymentController');
const router = express.Router();

// Lấy tất cả các payment của một đơn hàng
router.get('/order/:orderId', paymentController.getPaymentsByOrder);

// Lấy tất cả các payment của người dùng
router.get('/user/:userId', paymentController.getPaymentsByUser);

// Tạo một payment mới
router.post('/', paymentController.createPayment);

// Cập nhật trạng thái thanh toán
router.put('/:id', paymentController.updatePayment);

// Xóa một payment
router.delete('/:id', paymentController.deletePayment);

module.exports = router;
