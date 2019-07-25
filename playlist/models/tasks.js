const mongoose = require('mongoose');
var Schema = mongoose.Schema;

var taskSchema = new Schema({
  title:  String,
  description: String,
  status:  Number
  
});

module.exports = mongoose.model('Task',taskSchema,'tasks')