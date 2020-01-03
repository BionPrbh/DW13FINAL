'use strict';
module.exports = (sequelize, DataTypes) => {
  const Event = sequelize.define('Event', {
    title: DataTypes.STRING,
    category_id: DataTypes.INTEGER,
    startTime: DataTypes.STRING,
    endTime: DataTypes.STRING,
    price: DataTypes.INTEGER,
    description: DataTypes.STRING,
    address: DataTypes.STRING,
    urlMaps: DataTypes.STRING,
    img: DataTypes.STRING,
    user_id: DataTypes.INTEGER
  }, {});
  Event.associate = function(models) {
    // associations can be defined here
    Event.belongsTo(models.Category, {
      foreignKey: 'category_id',
      as:'category',
      sourceKey:'id'
    });
    Event.belongsTo(models.User, {
      foreignKey: 'user_id',
      as:'created_by',
      sourceKey:'id'
    });
  };
  return Event;
};

