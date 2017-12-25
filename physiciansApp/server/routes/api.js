const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const mongoose = require('mongoose'); 

const Physician = require("../model/physician");
const User = require("../model/user");

// Error handling
const sendError = (err, res) => {
    response.status = 501;
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

    User.find(function(err, users) {

        if(err) {
            sendError(err, res);
        }

        console.log("Got users!");
        response.data = users;
        res.json(response);

    });
/*
    connection((db) => {
        db.collection('users')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
*/
});

router.get('/physicians', (req, res, next) => {
    Physician.find(function(err, items) {
        if(err) {
           sendError(err, res);
        }
        console.log("Got physicians!");
        response.data = items;
        res.json(response);
        
    });
});

router.post('/physicians', (req, res, next) => {


    /*let newPhysician = new Physician(
        req.body.firstName,
        req.body.lastName,
        req.body.description,
        req.body.locXCoord,
        req.body.locYCoord,
        req.body.email
    );*/

    let newPhysician = new Physician(req.body);
    
    newPhysician.save(function(err) {
        if(err) {
            sendError(err, res);
        }
        console.log("Saved physician!");
        response.data = newPhysician;
        res.json(response);

    });

});

router.get('/physicians/:id', (req, res, next) => {

    Physician.findById(req.params.id, function(err, phy){
        if(err) {
            sendError(err,res);
        }
        console.log("Found physician with id " + req.params.id);
        response.data = phy;
        res.json(response);
    });

});

router.put('/physicians/:id', (req, res, next) => {

    let physicianToUpdate = {
        "firstName": req.body.firstName,
        "lastName": req.body.lastName,
        "description": req.body.description,
        "locXCoord": req.body.locXCoord,
        "locYCoord": req.body.locYCoord,
        "email": req.body.email
    };

    Physician.findByIdAndUpdate(req.params.id, physicianToUpdate, function(err, phy){

        if(err) {
            sendError(err, res);
        }

        console.log("Physician updated!");
        response.data = phy;
        res.json(response);
    });

});

router.delete('/physicians/:id', (req, res, next) => {

    Physician.remove({_id: req.params.id}, function(err, phy) {

        if(err) {
            sendError(err, res);
        }
        console.log("Physician deleted!");
        response.data = phy;
        res.json(response);
    });

});


module.exports = router;