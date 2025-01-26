'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Payment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Mối quan hệ với bảng Orders
      Payment.belongsTo(models.Order, {
        foreignKey: 'orderId',
        as: 'order', // Alias cho quan hệ
        onDelete: 'CASCADE', // Xóa đơn hàng khi người dùng bị xóa
        onUpdate: 'CASCADE'  // Cập nhật userId khi người dùng được cập nhật
      });

      // Mối quan hệ với bảng Users
      Payment.belongsTo(models.User, {
        foreignKey: 'userId',
        as: 'user', // Alias cho quan hệ
        onDelete: 'CASCADE', // Xóa đơn hàng khi người dùng bị xóa
        onUpdate: 'CASCADE'  // Cập nhật userId khi người dùng được cập nhật
      });
    }
  }
  Payment.init({
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false, // orderId không thể null
    },
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false, // userId không thể null
    },
    paymentMethod: {
      type: DataTypes.ENUM('credit_card', 'paypal', 'bank_transfer', 'cash_on_delivery'),
      allowNull: false,  // paymentMethod không thể null
    },
    status: {
      type: DataTypes.ENUM('pending', 'completed', 'failed'),
      allowNull: false,  // status không thể null
    },
    transactionId: {
      type: DataTypes.STRING,
      allowNull: true,  // transactionId có thể null
    }
  }, {
    sequelize,
    modelName: 'Payment',
  });
  return Payment;
};
