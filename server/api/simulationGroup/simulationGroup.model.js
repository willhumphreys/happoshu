'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

//var SimulationGroupSchema = new Schema({any: Schema.Types.Mixed});

var SimulationGroupSchema = new Schema({
    runName: String,
    dirty: Boolean,
    description: String,
    cleanUpGraphFiles: Boolean,
    loggingSimulations: Boolean

});

module.exports = mongoose.model('SimulationGroup', SimulationGroupSchema);
