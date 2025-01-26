'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Order extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Mối quan hệ với bảng User
      Order.belongsTo(models.User, {  // Giả sử bạn có một model User
        foreignKey: 'userId',
        as: 'user', // Alias cho quan hệ
        onDelete: 'CASCADE', // Xóa đơn hàng khi người dùng bị xóa
        onUpdate: 'CASCADE'  // Cập nhật userId khi người dùng được cập nhật
      });
    }
  }
  Order.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false, // Không cho phép giá trị null
      references: {
        model: 'Users', // Tên bảng tham chiếu
        key: 'id'       // Khóa chính của bảng Users
      },
      onDelete: 'CASCADE',
      onUpdate: 'CASCADE'
    },
    totalPrice: {
      type: DataTypes.DECIMAL(15, 2),  // Precision và Scale cho kiểu DECIMAL
      allowNull: false  // Tổng giá trị không được null
    },
    status: {
      type: DataTypes.ENUM('pending', 'shipped', 'completed', 'cancelled'), // Các trạng thái có thể có
      allowNull: false, // Không cho phép giá trị null
      defaultValue: 'pending' // Mặc định là 'pending'
    }
  }, {
    sequelize,
    modelName: 'Order',
  });
  return Order;
};
