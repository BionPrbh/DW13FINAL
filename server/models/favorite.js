'use strict';
module.exports = (sequelize, DataTypes) => {
  const Favorite = sequelize.define('Favorite', {
    user_id: DataTypes.INTEGER,
    event_id: DataTypes.INTEGER
  }, {});
  Favorite.associate = function(models) {
    // associations can be defined here
    Favorite.belongsTo(models.User, {
      foreignKey: 'user_id',
      as: 'favoritedBy',
      sourceKey: 'id'
    });
    Favorite.belongsTo(models.Event, {
      foreignKey: 'event_id',
      as: 'favoritedEvent',
      sourceKey: 'id'
    });
  };
  return Favorite;
};