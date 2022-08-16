// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    // define columns
    id: {
      // DataType INTEGER for ID
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    // DataType STRING for NAME
    product_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    price: {
      // DataType DECIMAL for PRICE
      type: DataTypes.DECIMAL,
      allowNull: false,
      // check true for DECIMAL
      validate: {
        isDecimal: true
      }
    },
    stock: {
      // DataType INTEGER for STOCK
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 10,
      // check true for NUMERIC
      validate: {
        isNumeric: true
      }
    },
    category_id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      // reference category model to ID
      references: {
        model: 'category',
        key: 'id'
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
