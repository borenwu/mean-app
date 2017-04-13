/**
 * Created by Administrator on 2017/4/13.
 */
"use strict";

module.exports = function (sequelize, DataTypes) {
  const User = sequelize.define("User", {
    username: DataTypes.STRING
  }, {
    classMethods: {
      associate: function (models) {
        User.hasMany(models.Task)
      }
    }
  });

  return User;
};
