const paymentService = require('../services/paymentService');

const paymentController = {
  // Lấy tất cả các payment của một đơn hàng
  getPaymentsByOrder: async (req, res) => {
    const orderId = req.params.orderId;
    try {
      const payments = await paymentService.getPaymentsByOrder(orderId);
      res.status(200).json(payments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Lấy tất cả các payment của người dùng
  getPaymentsByUser: async (req, res) => {
    const userId = req.params.userId;
    try {
      const payments = await paymentService.getPaymentsByUser(userId);
      res.status(200).json(payments);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Tạo một payment mới
  createPayment: async (req, res) => {
    const { orderId, userId, paymentMethod, status, transactionId } = req.body;
    try {
      const newPayment = await paymentService.createPayment({ orderId, userId, paymentMethod, status, transactionId });
      res.status(201).json(newPayment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Cập nhật trạng thái thanh toán
  updatePayment: async (req, res) => {
    const paymentId = req.params.id;
    const { status, transactionId } = req.body;
    try {
      const updatedPayment = await paymentService.updatePayment(paymentId, { status, transactionId });
      res.status(200).json(updatedPayment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Xóa một payment
  deletePayment: async (req, res) => {
    const paymentId = req.params.id;
    try {
      await paymentService.deletePayment(paymentId);
      res.status(200).json({ message: `Payment with ID ${paymentId} deleted successfully` });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = paymentController;
