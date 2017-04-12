/**
 * Created by Administrator on 2017/4/12.
 */
var Sequelize = require('sequelize')
  , sequelize = new Sequelize('sequelize_test', 'root', null, {
  logging: false
})

var Project = sequelize.define('project', {
  name: Sequelize.STRING
})

var Task = sequelize.define('task', {
  name: Sequelize.STRING
})

Project.hasMany(Task)


sequelize.sync({ force: true }).success(function() {
  Project.create({ name: 'project' }).success(function(project) {
    Task.create({ name: 'task' }).success(function(task) {
      project.setTasks([ task ]).success(function() {
        project.getTasks().success(function(tasks) {
          console.log(tasks.map(function(t){ return t.values }))
        })
      })
    })
  })
})
