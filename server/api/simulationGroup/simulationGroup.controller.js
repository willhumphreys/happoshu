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
        delete req.body._id;
    }
    SimulationGroup.findById(req.params.id, function (err, test) {
        if (err) {
            return handleError(res, err);
        }
        if (!test) {
            return res.status(404).send('Not Found');
        }
        var updated = _.merge(test, req.body);
        updated.save(function (err) {
            if (err) {
                return handleError(res, err);
            }
            return res.status(200).json(test);
        });
    });
};

function handleError(res, err) {
    return res.send(500, err);
}
