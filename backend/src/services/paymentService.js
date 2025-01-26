const { Payment } = require('../models');

const paymentService = {
  // Lấy tất cả các payment của một đơn hàng
  getPaymentsByOrder: async (orderId) => {
    try {
      const payments = await Payment.findAll({
        where: { orderId },
      });
      return payments;
    } catch (error) {
      throw new Error('Error fetching payments for order');
    }
  },

  // Lấy tất cả các payment của một người dùng
  getPaymentsByUser: async (userId) => {
    try {
      const payments = await Payment.findAll({
        where: { userId },
      });
      return payments;
    } catch (error) {
      throw new Error('Error fetching payments for user');
    }
  },

  // Tạo một payment mới
  createPayment: async (data) => {
    try {
      const newPayment = await Payment.create(data);
      return newPayment;
    } catch (error) {
      throw new Error('Error creating payment');
    }
  },

  // Cập nhật trạng thái thanh toán
  updatePayment: async (paymentId, data) => {
    try {
      const payment = await Payment.findByPk(paymentId);
      if (!payment) {
        throw new Error('Payment not found');
      }
      await payment.update(data);
      return payment;
    } catch (error) {
      throw new Error('Error updating payment');
    }
  },

  // Xóa payment
  deletePayment: async (paymentId) => {
    try {
      const payment = await Payment.findByPk(paymentId);
      if (!payment) {
        throw new Error('Payment not found');
      }
      await payment.destroy();
      return paymentId; // Trả về ID của payment đã xóa
    } catch (error) {
      throw new Error('Error deleting payment');
    }
  },
};

module.exports = paymentService;
