'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class OrderItem extends Model {
   
    static associate(models) {
   
      OrderItem.belongsTo(models.Order, { 
        foreignKey: 'orderId',
        as: 'order',
        onDelete: 'SET NULL', 
        onUpdate: 'CASCADE'

      });

    
      OrderItem.belongsTo(models.Product, {
        foreignKey: 'productId',  
        as: 'product',
        onDelete: 'SET NULL',        
        onDelete: 'CASCADE',     
      });
    }
  }
  OrderItem.init({
    orderId: {
      type: DataTypes.INTEGER,
      allowNull: false,  // orderId không thể null
    },
    productId: {
      type: DataTypes.INTEGER,
      allowNull: false,  // productId không thể null
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,  // quantity không thể null
    },
    price: {
      type: DataTypes.DECIMAL,
      allowNull: false,  // price không thể null
    }
  }, {
    sequelize,
    modelName: 'OrderItem',
  });
  return OrderItem;
};
