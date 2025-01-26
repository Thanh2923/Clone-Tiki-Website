'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // Mối quan hệ với bảng Users
      Review.belongsTo(models.User, {
        foreignKey: 'userId',  // userId là khóa ngoại trong bảng Reviews
        as: 'user', // Alias cho quan hệ
        onDelete: 'CASCADE', // Xóa đơn hàng khi người dùng bị xóa
        onUpdate: 'CASCADE'  // Cập nhật userId khi người dùng được cập nhật
      });

      // Mối quan hệ với bảng Products
      Review.belongsTo(models.Product, {
        foreignKey: 'productId', // productId là khóa ngoại trong bảng Reviews
        as: 'product', // Alias cho quan hệ
        onDelete: 'CASCADE', // Xóa đơn hàng khi người dùng bị xóa
        onUpdate: 'CASCADE'  // Cập nhật userId khi người dùng được cập nhật
      });
    }
  }
  Review.init({
    userId: {
      type: DataTypes.INTEGER,
      allowNull: false,  // userId không thể null
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,  // productId không thể null
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false,  // rating không thể null
      validate: {
        min: 1,   // Rating phải nằm trong khoảng từ 1 đến 5
        max: 5
      }
    },
    comment: {
      type: DataTypes.TEXT,
      allowNull: true,  // comment có thể null
    },
    flag: {
      type:DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
  }, {
    sequelize,
    modelName: 'Review',
  });
  return Review;
};
