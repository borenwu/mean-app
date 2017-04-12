/**
 * Created by Administrator on 2017/4/11.
 */
const express = require('express')
const router = express.Router()

router.get('/',(req,res)=>{
    res.send('api works')
})

router.get('/test',(req,res)=>{
  res.send('api test works')
})

module.exports = router
