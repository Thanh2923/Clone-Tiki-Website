const { Payment } = require("../models");
const PayOs = require("@payos/node");

const payOsClient = new PayOs(
  "e5fbf309-237c-4ad3-8ec9-d6be7616e84a", 
  "aef25be0-d3b5-43de-9187-60c7bca23a5a", 
  "68c55f15424d562e146d752407a331daa6d02bafa4bbc29634be53866751135b"
);

const YOUR_DOMAIN = "http://localhost:3000";

const paymentService = {
  createPayment: async ({ orderId, userId, amount, paymentMethod}) => {
    try {
      const order = {
        amount: amount,
        description: 'Chuyển tiền đặt hàng',
        orderCode: orderId,
        returnUrl: `${YOUR_DOMAIN}/payment/success`,
        cancelUrl: `${YOUR_DOMAIN}/payment/cancel`,
      };

      const paymentLink = await payOsClient.createPaymentLink(order);
  console.log(paymentLink,"paymentLink")

      const newPayment = await Payment.create({
        orderId,
        userId,
        paymentMethod,
        status: "pending",
      });

      
      await newPayment.update({ transactionId: response.transactionId });

      return { payment: newPayment, payosUrl: response.checkoutUrl };
    } catch (error) {
      console.error("❌ Error creating payment:", error);
      throw new Error(error.message || "Error creating payment");
    }
  },

  updatePaymentStatus: async (transactionId, status) => {
    try {
      console.log("🚀 Updating Payment Status:", { transactionId, status });

      const payment = await Payment.findOne({ where: { transactionId } });
      if (!payment) {
        throw new Error("Payment not found");
      }

      payment.status = status;
      await payment.save();

      console.log("✅ Payment status updated:", payment);

      return payment;
    } catch (error) {
      console.error("❌ Error updating payment status:", error);
      throw new Error(error.message || "Error updating payment status");
    }
  },
};

module.exports = paymentService;
