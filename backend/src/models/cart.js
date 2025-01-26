'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cart extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Mối quan hệ với bảng Users
      Cart.belongsTo(models.User, {
        foreignKey: 'userId',  // userId là khóa ngoại trong bảng Cart
        as: 'user', // Alias cho quan hệ
        onDelete: 'CASCADE', // Xóa đơn hàng khi người dùng bị xóa
        onUpdate: 'CASCADE'  // Cập nhật userId khi người dùng được cập nhật
      });

      // Mối quan hệ với bảng Products
      Cart.belongsTo(models.Product, {
        foreignKey: 'productId', // productId là khóa ngoại trong bảng Cart
        as: 'product', // Alias cho quan hệ
        onDelete: 'CASCADE', // Xóa đơn hàng khi người dùng bị xóa
        onUpdate: 'CASCADE'  // Cập nhật userId khi người dùng được cập nhật
      });
    }
  }
  Cart.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,  // userId không thể null
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,  // productId không thể null
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,  // quantity không thể null
    }
  }, {
    sequelize,
    modelName: 'Cart',
  });
  return Cart;
};
