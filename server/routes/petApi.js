/**
 * Created by Administrator on 2017/4/12.
 */
const express = require('express')
const petRouter = express.Router()
const dateFormat = require('dateformat');

// import pet model
const Pet = require('../model/pet')
const Person = require('../model/person')


petRouter.get('/add', (req, res) => {
  let now = Date.now();
  let date = dateFormat(now, "yyyy-mm-dd");
  // let pet = {
  //   name:'Gaffey',
  //   gender:false,
  //   birth:'2007-07-07',
  //   createdAt: date,
  //   updatedAt: date
  // }
  //
  // Pet.create(pet).then(function (pet) {
  //   console.log('****************************');
  //   res.send(JSON.stringify(pet))
  //   console.log(JSON.stringify(pet));
  // });
  Person.findOne({ where: { name: 'Tom' } }).then(function (person) {
    let petInfo = {
      name:'Gaffey',
      gender:false,
      birth:'2007-07-07',
      createdAt: date,
      updatedAt: date
    }
    Pet.create(petInfo).then(function (pet) {
      person.setPets([pet]).then(function (p) {
        console.log('created.' + JSON.stringify(p));
      }).catch(function (err) {
        console.log('failed: ' + err);
      });
    })
  })
})

module.exports = petRouter
