'use strict';

var _ = require('lodash');
var SimulationGroup = require('./simulationGroup.model');

// Get list of simulationGroups
exports.index2 = function (req, res) {
    SimulationGroup.find(function (err, simulationGroups2) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(200, simulationGroups2);
    });
};


function handleError(res, err) {
    return res.send(500, err);
}
