'use strict';
module.exports = (sequelize, DataTypes) => {
  const Order = sequelize.define('Order', {
    event_id: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    quantity: DataTypes.STRING,
    totalPrice: DataTypes.STRING,
    status: DataTypes.STRING,
    attachment: DataTypes.STRING
  }, {});
  Order.associate = function(models) {
    // associations can be defined here
    Order.belongsTo(models.Event, {
      foreignKey: 'event_id',
      as:'event',
      sourceKey: 'id'
    });
    Order.belongsTo(models.User, {
      foreignKey: 'user_id',
      as:'buyer',
      sourceKey: 'id'
    });
  };
  return Order;
};