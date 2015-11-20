'use strict';

var _ = require('lodash');
var MergedPosition = require('./mergedPosition.model');

var async = require("async");


exports.league = function (req, res) {

    async.series([
            function (callback) {
                MergedPosition.find({
                    Winners: {'$gte': 5},
                    'options.name': {'$all': ['AUDUSD', 'AUDUSDBull']}
                }, callback).sort({WinnerLoserRationSimulations: -1, TickProfitPerTrade: -1}).limit(2);

            },
            function (callback) {
                MergedPosition.find({
                    Winners: {'$gte': 5},
                    'options.name': {'$all': ['AUDUSD', 'AUDUSDBear']}
                }, callback).sort({WinnerLoserRationSimulations: -1, TickProfitPerTrade: -1}).limit(2);
            },

            function (callback) {
                MergedPosition.find({
                    Winners: {'$gte': 5},
                    'options.name': {'$all': ['GBPUSD', 'GBPUSDBull']}
                }, callback).sort({WinnerLoserRationSimulations: -1, TickProfitPerTrade: -1}).limit(2);

            },
            function (callback) {
                MergedPosition.find({
                    Winners: {'$gte': 5},
                    'options.name': {'$all': ['GBPUSD', 'GBPUSDBear']}
                }, callback).sort({WinnerLoserRationSimulations: -1, TickProfitPerTrade: -1}).limit(2);
            },
            function (callback) {
                MergedPosition.find({
                    Winners: {'$gte': 5},
                    'options.name': {'$all': ['EURUSD', 'EURUSDBull']}
                }, callback).sort({WinnerLoserRationSimulations: -1, TickProfitPerTrade: -1}).limit(2);

            },
            function (callback) {
                MergedPosition.find({
                    Winners: {'$gte': 5},
                    'options.name': {'$all': ['EURUSD', 'EURUSDBear']}
                }, callback).sort({WinnerLoserRationSimulations: -1, TickProfitPerTrade: -1}).limit(2);
            },


            function (callback) {
                MergedPosition.find({
                    Winners: {'$gte': 5},
                    'options.name': {'$all': ['SPX', 'SPXBull']}
                }, callback).sort({WinnerLoserRationSimulations: -1, TickProfitPerTrade: -1}).limit(2);
            },

            function (callback) {
                MergedPosition.find({
                    Winners: {'$gte': 5},
                    'options.name': {'$all': ['SPX', 'SPXBear']}
                }, callback).sort({WinnerLoserRationSimulations: -1, TickProfitPerTrade: -1}).limit(2);

            },
            function (callback) {
                MergedPosition.find({
                    Winners: {'$gte': 5},
                    'options.name': {'$all': ['GOLD', 'GOLDBull']}
                }, callback).sort({WinnerLoserRationSimulations: -1, TickProfitPerTrade: -1}).limit(2);
            },
            function (callback) {
                MergedPosition.find({
                    Winners: {'$gte': 5},
                    'options.name': {'$all': ['GOLD', 'GOLDBear']}
                }, callback).sort({WinnerLoserRationSimulations: -1, TickProfitPerTrade: -1}).limit(2);
            }


        ],
        function (err, results) {


            var flatResults = [];


            function appendQuery(element) {
                flatResults = flatResults.concat(element);
            }

            results.forEach(appendQuery);

            return res.json(200, flatResults);
        });
};

// Get list of mergedPositions
exports.index = function (req, res) {

    var options = [];

    var minWinners = 5;

    var dayOfWeekSpecified = false;
    var noDayOfWeekSpecified = false;

    var extraOptions = 0;

    for (var property in req.query) {
        if (req.query.hasOwnProperty(property)) {
            var value = req.query[property];
            console.log(property + " " + value);

            if (property == "minWinners") {
                minWinners = value;
                console.log("Setting min winners to " + value);
            }

            if (property == "dayOfWeek" && value == "true") {
                dayOfWeekSpecified = true;
                extraOptions++;
            }

            if (property == "noDayOfWeek" && value == "true") {
                noDayOfWeekSpecified = true;
                extraOptions++;
            }

            if (value == "true" && property != "dayOfWeek" && property != "noDayOfWeek") {
                options.push(property);
            }
        }
    }

    var positionBuilder = MergedPosition.find().where('Winners').gte(parseInt(minWinners));

    if (options.length - extraOptions > 0) {
        console.log("options is" + options);
        //positionBuilder = positionBuilder.where('options.name').all(options);
        positionBuilder = positionBuilder.where('options.name').in(options);
    }

    if (dayOfWeekSpecified == true) {
        console.log("Day of Week specified.");
        positionBuilder = positionBuilder.where('dayOfWeek').ne('Not Set');
    }

    if (noDayOfWeekSpecified == true) {
        console.log("Day of Week set not specified");
        positionBuilder = positionBuilder.where('dayOfWeek').equals('Not Set');
    }

    positionBuilder = positionBuilder.sort({WinnerLoserRationSimulations: -1, TickProfitPerTrade: -1})

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
