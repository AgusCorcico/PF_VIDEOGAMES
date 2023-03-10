const { DataTypes } = require("sequelize");
module.exports = function (sequelize) {
  return sequelize.define("productcart", {
    quantity: {
      type: DataTypes.INTEGER,
      defaultValue: 1,
    },
    totalValue: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    img: {
      type: DataTypes.TEXT,
    },
    name: {
      type: DataTypes.STRING,
    },
    priceProduct: {
      type: DataTypes.DECIMAL,
    },
  });
};
