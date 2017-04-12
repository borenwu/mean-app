/**
 * Created by Administrator on 2017/4/12.
 */
var Sequelize = require('sequelize');
var sequelize = require('../db');


//create Pet model
const Person = sequelize.define('person',
  {
    name: Sequelize.STRING(100),
    age: Sequelize.INTEGER,
  },
  {
    timestamps: false
  }
);


// 创建表
// Pet.sync() 会创建表并且返回一个 Promise 对象
// 如果 force = true 则会把存在的表（如果 pets 表已存在）先销毁再创建表
// 默认情况下 forse = false
const person = Person.sync({force: false});

var Pet = require('./pet')
Person.hasMany(Pet, {as: 'pets'})

module.exports = Person;

// // 添加新pet
// exports.addPerson = function(name, age) {
//
//   // 向 Person 表中插入数据
//   return Pet.create({
//     name: name,
//     age: age
//   });
// };
//
// // 通过用户名查找pet
// exports.findByName = function(name) {
//   return Person.findOne({ where: { name: name } });
// };
