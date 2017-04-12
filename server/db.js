/**
 * Created by Administrator on 2017/4/12.
 */
const Sequelize = require('sequelize')

const dbconfig = require('./config/dbconfig')


//db connect
const sequelize = new Sequelize(
  dbconfig.database,
  dbconfig.username,
  dbconfig.password,
  {
    host: dbconfig.host,
    port: dbconfig.port,
    dialect: 'mysql',
  }
)

module.exports = sequelize
