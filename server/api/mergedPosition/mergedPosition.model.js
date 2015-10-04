'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

mongoose.set('debug', true);

var MergedPositionSchema = new Schema({
    name: String,
    info: String,
    active: Boolean
});

module.exports = mongoose.model('mergedpositions', MergedPositionSchema);
