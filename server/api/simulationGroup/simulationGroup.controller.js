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
    console.log("hey its the back end. " + JSON.stringify(req.body))
    if (req.body._id) {
        console.log("deleting " + req.body._id)
        delete req.body._id;
    }
    SimulationGroup.findById(req.params.id, function (err, simulationGroup) {
        if (err) {
            return handleError(res, err);
        }
        if (!simulationGroup) {
            return res.status(404).send('Not Found');
        }
        console.log("This is the simulationGroup from the front end " + JSON.stringify(req.body));
        console.log("Existing " + JSON.stringify(simulationGroup));
        var updated = _.merge(simulationGroup, req.body);
        console.log("updated" + JSON.stringify(updated));
        updated.save(function (err) {
            if (err) {
                return handleError(res, err);
            }
            console.log("This is the simulationGroup " + JSON.stringify(simulationGroup));
            return res.status(200).json(simulationGroup);
        });
    });
};

function handleError(res, err) {
    return res.send(500, err);
}
