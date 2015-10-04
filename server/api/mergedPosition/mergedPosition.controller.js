'use strict';

var _ = require('lodash');
var MergedPosition = require('./mergedPosition.model');

// Get list of mergedPositions
exports.index = function (req, res) {

    var eurusd = req.query.EURUSD;
    console.log("eurusd " + eurusd);
    var positionBuilder = MergedPosition.find().where('Winners').gt(5);

    var options = [];

    if (eurusd == "true") {
        console.log("Here I am eurusd" + eurusd);
        options.push("EURUSD");
    }

    var spx = req.query.SPX;
    console.log("spx " + spx);
    if (spx == "true") {
        console.log("Here I am spx" + spx);
        options.push("SPX");
    }


    var sma90 = req.query.sma90;
    console.log("sma90 " + sma90);
    if (sma90 == "true") {
        console.log("Here I am sma90" + sma90);
        options.push("SMA90");
    }

    if (options.length > 0) {
        console.log("options is" + options);
        positionBuilder = positionBuilder.where('options.name').all(options);
    }

    positionBuilder.
        exec(function (err, mergedPositions) {
            if (err) {
                return handleError(res, err);
            }
            console.log("Finished mergedPosition query");
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
