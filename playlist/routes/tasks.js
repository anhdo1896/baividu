var express = require('express');
var router = express.Router();
var Task = require('./../models/tasks')
router.get('/',async function(req, res, next) {
  var task = await Task.find({},(err,result)=>{
      if(err) console.log(err)
      return  res.send(result);
  })  
 
});

module.exports = router;
