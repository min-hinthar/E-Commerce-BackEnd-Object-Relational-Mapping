const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    // define columns
    id: {
      // DataType INTEGER for ID
      type: DataTypes.INTEGER,
      primaryKey: true,
      allowNull: false,
      autoIncrement: true
    },
    product_id: {
      // DataType INTEGER for Product_ID
      type: DataTypes.INTEGER,
      // reference to product model with ID key
      references: {
        model: 'product',
        key: 'id'
      }
    },
    tag_id: {
      // DataType INTEGER for Tag_ID
      type: DataTypes.INTEGER,
      // reference to tag model with ID key
      references: {
        model: 'tag',
        key: 'id'
      }
    } 
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
