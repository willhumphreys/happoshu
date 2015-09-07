/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /simulationGroups              ->  index
 * POST    /simulationGroups              ->  create
 * GET     /simulationGroups/:id          ->  show
 * PUT     /simulationGroups/:id          ->  update
 * DELETE  /simulationGroups/:id          ->  destroy
 */

'use strict';

var _ = require('lodash');
var SimulationGroup = require('./simulationGroup.model');

// Get list of simulationGroups
exports.index = function (req, res) {
    SimulationGroup.find(function (err, simulationGroups) {
        console.log(simulationGroups);
        console.log(err);
        if (err) {
            return handleError(res, err);
        }
        return res.json(200, simulationGroups);
    });
};

// Get a single simulationGroup
exports.show = function (req, res) {
    SimulationGroup.findById(req.params.id, function (err, simulationGroup) {
        console.log(simulationGroup);
        console.log(err);
        if (err) {
            return handleError(res, err);
        }
        if (!simulationGroup) {
            return res.send(404);
        }
        return res.json(simulationGroup);
    });
};

// Creates a new simulationGroup in the DB.
exports.create = function (req, res) {
    SimulationGroup.create(req.body, function (err, simulationGroup) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(201, simulationGroup);
    });
};

// Updates an existing simulationGroup in the DB.
exports.update = function (req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    SimulationGroup.findById(req.params.id, function (err, simulationGroup) {
        if (err) {
            return handleError(res, err);
        }
        if (!simulationGroup) {
            return res.send(404);
        }
        var updated = _.merge(simulationGroup, req.body);
        updated.save(function (err) {
            if (err) {
                return handleError(res, err);
            }
            return res.json(200, simulationGroup);
        });
    });
};

// Deletes a simulationGroup from the DB.
exports.destroy = function (req, res) {
    SimulationGroup.findById(req.params.id, function (err, simulationGroup) {
        if (err) {
            return handleError(res, err);
        }
        if (!simulationGroup) {
            return res.send(404);
        }
        simulationGroup.remove(function (err) {
            if (err) {
                return handleError(res, err);
            }
            return res.send(204);
        });
    });
};

function handleError(res, err) {
    return res.send(500, err);
}