/**
 * Created by Administrator on 2017/4/12.
 */
const express = require('express')
const personRouter = express.Router()


// import person and pet model
const Person = require('../model/person')


personRouter.get('/add', (req, res) => {
  let personInfo = {
    name:'Tom',
    age:21,
  }

  Person.create(personInfo).then(function (person) {
    console.log('****************************');
    res.send(JSON.stringify(person))
    console.log(JSON.stringify(person));
  });
})

