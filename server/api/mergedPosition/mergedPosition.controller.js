'use strict';

var _ = require('lodash');
var MergedPosition = require('./mergedPosition.model');

// Get list of mergedPositions
exports.index = function (req, res) {
    MergedPosition.find({'Winners': {$gt: 5}}, function (err, mergedPositions) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(200, mergedPositions);
    });
};

// Get a single mergedPosition
exports.show = function (req, res) {
    MergedPosition.findById(req.params.id, function (err, mergedPosition) {
        if (err) {
            return handleError(res, err);
        }
        if (!mergedPosition) {
            return res.send(404);
        }
        return res.json(mergedPosition);
    });
};

// Creates a new mergedPosition in the DB.
exports.create = function (req, res) {
    MergedPosition.create(req.body, function (err, mergedPosition) {
        if (err) {
            return handleError(res, err);
        }
        return res.json(201, mergedPosition);
    });
};

// Updates an existing mergedPosition in the DB.
exports.update = function (req, res) {
    if (req.body._id) {
        delete req.body._id;
    }
    MergedPosition.findById(req.params.id, function (err, mergedPosition) {
        if (err) {
            return handleError(res, err);
        }
        if (!mergedPosition) {
            return res.send(404);
        }
        var updated = _.merge(mergedPosition, req.body);
        updated.save(function (err) {
            if (err) {
                return handleError(res, err);
            }
            return res.json(200, mergedPosition);
        });
    });
};

// Deletes a mergedPosition from the DB.
exports.destroy = function (req, res) {
    MergedPosition.findById(req.params.id, function (err, mergedPosition) {
        if (err) {
            return handleError(res, err);
        }
        if (!mergedPosition) {
            return res.send(404);
        }
        mergedPosition.remove(function (err) {
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
