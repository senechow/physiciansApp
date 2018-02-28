var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const OfficeHour = require("../model/physician");

// Define a schema.
var userSchema = new Schema({
  name: String
});

// Create a model.
var User = mongoose.model('User', userSchema);

module.exports = User;