const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const mongoose = require('mongoose'); 

const Physician = require("../model/physician");
const User = require("../model/user");

// Error handling
const sendError = (err, res, data) => {
    response.status = 501;
    response.data = data;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get users
router.get('/users', (req, res) => {

    try {
        User.find(function(err, users) {

            if(err) {
                sendError(err, res);
            }

            console.log("Got users!");
            response.data = users;
            res.json(response);

        });
    } catch(err) {
        console.log("An error has occurred: " + err);
        sendError(err, res);
    }

});

router.get('/physicians', (req, res, next) => {
    const searchStr = req.query.searchStr;
    try {
        if(searchStr) {
           findPhysiciansWithQueryParams(req, res, searchStr);
        } else {
           findPhysiciansWithNoQueryParams(req, res);
        }
    } catch(err) {
        console.log("An error has occurred: " + err);
        sendError(err, res);
    }
});

router.post('/physicians', (req, res, next) => {

    let newPhysician = new Physician(req.body);
    newPhysician._id = mongoose.Types.ObjectId();
    try {
        newPhysician.save(function(err) {
            if(err) {
                sendError(err, res, newPhysician);
            } else {
                console.log("Saved physician!");
                response.data = newPhysician;
                res.json(response);
            }

        });
    } catch(err) {
        console.log("An error has occurred: " + err);
        sendError(err, res);
    }

});

router.get('/physicians/:id', (req, res, next) => {
    try {
        Physician.findById(req.params.id, function(err, phy){
            if(err) {
                sendError(err,res);
            } else {
                console.log("Found physician with id " + req.params.id);
                response.data = phy;
                res.json(response);
            }
        });
    } catch(err) {
        console.log("An error has occurred: " + err);
        sendError(err, res);
    }

});

router.put('/physicians/:id', (req, res, next) => {

    let physicianToUpdate = {
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "description": req.body.description,
        "address": req.body.address,
        "province": req.body.province,
        "city": req.body.city,
        "postalCode": req.body.postalCode,
        "phoneNumber": req.body.phoneNumber,
        "email": req.body.email,
        "rating": req.body.rating,
        "ratingCount": req.body.ratingCount
    };

    Physician.findByIdAndUpdate(req.params.id, physicianToUpdate, {new: true}, function(err, phy){

        if(err) {
            sendError(err, res);
        }
        else {
            console.log("Physician updated!");
            console.log(phy);
            response.data = phy;
            res.json(response);
        }
    });

});

router.delete('/physicians/:id', (req, res, next) => {

    Physician.remove({_id: req.params.id}, function(err, phy) {

        if(err) {
            sendError(err, res);
        } else {
            console.log("Physician deleted!");
            response.data = phy;
            res.json(response);
        }
    });

});

function findPhysiciansWithQueryParams(req, res, searchStr) {
    Physician.aggregate([
        { 
           "$project": {"fullName": {"$concat": ["$firstName", " ", "$lastName"] },
           "addressProvince":  {"$concat": ["$address", " ", "$province"] },
           "addressPostalCode":  {"$concat": ["$address", " ", "postalCode"] },
           "firstName": "$firstName",
           "lastName": "$lastName",
           "address": "$address",
           "province": "$province",
           "city": "city",
           "postalCode": "$postalCode",
           "rating": "$rating",
           "ratingCount": "$ratingCount",
           "imagePath": "$imagePath", 
           "lat": "$lat",
           "long": "$long"
          }
        },
        { 
            "$match": { 
                "$or": [
                    {"firstName": { "$regex": searchStr, "$options": "i" } },
                    {"lastName": { "$regex": searchStr, "$options": "i" } },
                    {"address": { "$regex": searchStr, "$options": "i" } },
                    {"province": { "$regex": searchStr, "$options": "i" } },
                    {"city": { "$regex": searchStr, "$options": "i" } },
                    {"postalCode": { "$regex": searchStr, "$options": "i" } },
                    {"fullName": { "$regex": searchStr, "$options": "i" } },
                    {"addressProvince": { "$regex": searchStr, "$options": "i" } },
                    {"addressPostalCode": { "$regex": searchStr, "$options": "i" } },
                 ] 
             } 
        },
        {
            "$project": {
               "firstName": "$firstName",
               "lastName": "$lastName",
               "rating": "$rating",
               "ratingCount": "$ratingCount",
               "imagePath": "$imagePath",
               "lat": "$lat",
               "long": "$long"
            }
        }
    ], function (err, physicians) {
        if(err) { 
            sendError(err, res);
        } else {
            console.log("Got physicians with query params!");
            console.log(physicians);
            response.data = physicians;
            res.json(response);
        }
    });
}

function handleSearchNoQueryParams(req, res) {
    Physician.find(function(err, physicians) {
        if(err) {
         sendError(err, res);
        } else {
            console.log("Got physicians no query params!");
            console.log(physicians);
            response.data = physicians;
            res.json(response);
        }
    });
}


module.exports = router;