'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var SimulationGroupSchema = new Schema({
    runName: String,
    description: String
});

module.exports = mongoose.model('SimulationGroup', SimulationGroupSchema);