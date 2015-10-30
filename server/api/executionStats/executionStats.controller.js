'use strict';

var _ = require('lodash');
var ExecutionStats = require('./executionStats.model');

// Get list of executionStatss
exports.index = function (req, res) {
    ExecutionStats.find(function (err, executionStatss) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(200, executionStatss);
    }).sort({created: -1});
};

// Get a single executionStats
exports.show = function (req, res) {
    ExecutionStats.findById(req.params.id, function (err, executionStats) {
        if (err) {
            return handleError(res, err);
        }
        if (!executionStats) {
            return res.send(404);
        }
        return res.json(executionStats);
    });
};

// Creates a new executionStats in the DB.
exports.create = function (req, res) {
    ExecutionStats.create(req.body, function (err, executionStats) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(201, executionStats);
    });
};

// Updates an existing executionStats in the DB.
exports.update = function (req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    ExecutionStats.findById(req.params.id, function (err, executionStats) {
        if (err) {
            return handleError(res, err);
        }
        if (!executionStats) {
            return res.send(404);
        }
        var updated = _.merge(executionStats, req.body);
        updated.save(function (err) {
            if (err) {
                return handleError(res, err);
            }
            return res.json(200, executionStats);
        });
    });
};

// Deletes a executionStats from the DB.
exports.destroy = function (req, res) {
    ExecutionStats.findById(req.params.id, function (err, executionStats) {
        if (err) {
            return handleError(res, err);
        }
        if (!executionStats) {
            return res.send(404);
        }
        executionStats.remove(function (err) {
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
