const paymentService = require("../services/paymentService");  // Đảm bảo bạn import đúng

const paymentController = {
  // Tạo thanh toán mới
  createPayment: async (req, res) => {
    const { orderId, userId, amount, paymentMethod } = req.body;
    try {
      const { payment, payosUrl } = await paymentService.createPayment({
        orderId,
        userId,
        amount,
        paymentMethod,
      });

      // Trả về thông tin payment và URL PayOS
      res.status(201).json({
        payment,
        payosUrl,
      });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },

  // Cập nhật trạng thái thanh toán
  updatePayment: async (req, res) => {
    const { transactionId, status } = req.body;
    try {
      const updatedPayment = await paymentService.updatePaymentStatus(transactionId, status);
      res.status(200).json(updatedPayment);
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
  },
};

module.exports = paymentController;
