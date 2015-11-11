'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//var SimulationGroupSchema = new Schema({any: Schema.Types.Mixed});

var SimulationGroupSchema = new Schema({
    name: String,
    info: String,
    active: Boolean
});

module.exports = mongoose.model('SimulationGroup', SimulationGroupSchema);
