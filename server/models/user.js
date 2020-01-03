'use strict';
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    name: DataTypes.STRING,
    username: DataTypes.STRING,
    phone: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    img: DataTypes.STRING
  }, {});
  User.associate = function(models) {
    // associations can be defined here
    User.hasMany(models.Order, {as: 'Orders', foreignKey: 'user_id'})
    User.hasMany(models.Event, {as: 'Events', foreignKey: 'user_id'})
  };
  return User;
};

// hasMany: di models.<tujuan> as:<tujuan(plural)> harus sama dengan pemanggilan sql tabel di kodingan yang dibutuhkan
// foreignKey tersebut adalah id model tabel ini yang ada di tabel <tujuan>