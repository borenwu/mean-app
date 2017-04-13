/**
 * Created by Administrator on 2017/4/13.
 */
var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/', function (req, res) {
  res.send('user work');
});

router.post('/create', function (req, res) {
  models.User.create({
    username: req.body.username
  }).then(function (user) {
    res.send(JSON.stringify(user));
  }).catch(function (err) {
    console.log('failed: ' + err);
  });
});

router.get('/:user_id/destroy', function (req, res) {
  models.User.destroy({
    where: {
      id: req.params.user_id
    }
  }).then(function () {
    res.redirect('/api');
  });
});

router.post('/:user_id/tasks/create', function (req, res) {
  models.Task.create({
    title: req.body.title,
    UserId: req.params.user_id
  }).then(function () {
    res.redirect('/api');
  });
});

router.get('/:user_id/tasks/:task_id/destroy', function (req, res) {
  models.Task.destroy({
    where: {
      id: req.params.task_id
    }
  }).then(function () {
    res.redirect('/api');
  });
});


module.exports = router;
