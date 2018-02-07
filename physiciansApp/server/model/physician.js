var mongoose = require('mongoose');
var Schema = mongoose.Schema;

// Define a schema.
var physicianSchema = new Schema({
	firstName: String,
    lastName: String,
    description: String,
    address: String,
    city: String,
    province: String,
    postalCode: String,
    phoneNumber: String,
    email: String,
    lat: Number,
    long: Number  

});

// Create a model.
var Physician = mongoose.model('Physician', physicianSchema);

module.exports = Physician;