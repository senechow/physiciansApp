var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define a schema.
var physicianSchema = new Schema({
	firstName: String,
    lastName: String,
    description: String,
    locXCoord: Number,
    locYCoord: Number,
    email: String  

});

// Create a model.
var Physician = mongoose.model('Physician', physicianSchema);

module.exports = Physician;