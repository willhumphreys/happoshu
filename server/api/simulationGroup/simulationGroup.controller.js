'use strict';

var _ = require('lodash');
var SimulationGroup = require('./simulationGroup.model');

// Get list of simulationGroups
exports.index = function (req, res) {
    SimulationGroup.find(function (err, simulationGroups2) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(200, simulationGroups2);
    });
};


// Updates an existing test in the DB.
exports.update = function (req, res) {

    console.log("body to update" + req.body.runName)

    var query = {_id: req.body._id};

    SimulationGroup.findOneAndUpdate(query, req.body, {upsert: true}, function (err, doc) {
        console.log(err);
        console.log(doc);
        if (err) return res.send(500, {error: err});
        return res.send("successfully saved");
    });
};

function handleError(res, err) {
    return res.send(500, err);
}
