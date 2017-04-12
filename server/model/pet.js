/**
 * Created by Administrator on 2017/4/12.
 */
var Sequelize = require('sequelize');
var sequelize = require('../db');
// var Person = require('./person')

//create Pet model
const Pet = sequelize.define('pet',
  {
    name: Sequelize.STRING(100),
    gender: Sequelize.BOOLEAN,
    birth: Sequelize.STRING(10),
    createdAt: Sequelize.DATE,
    updatedAt: Sequelize.DATE,
    personId: Sequelize.INTEGER,
  },
  {
    timestamps: false
  }
);

// Pet.belongsTo(Person,{as:'person',foreignKey:'personId'});

// 创建表
// Pet.sync() 会创建表并且返回一个 Promise 对象
// 如果 force = true 则会把存在的表（如果 pets 表已存在）先销毁再创建表
// 默认情况下 forse = false
Pet.sync({ force: false });
module.exports = Pet;


// // 添加新pet
// exports.addPet = function(name, gender,birth) {
//   let now = Date.now()
//
//   // 向 Pet 表中插入数据
//   return Pet.create({
//     name: name,
//     gender: gender,
//     birth: birth,
//     createdAt: now,
//     updatedAt: now,
//   });
// };
//
// // 通过用户名查找pet
// exports.findByName = function(name) {
//   return Pet.findOne({ where: { name: name } });
// };
