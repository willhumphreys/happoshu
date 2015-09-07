/**
 * Broadcast updates to client when the model changes
 */

'use strict';

var simulationGroup = require('./simulationGroup.model');

exports.register = function (socket) {
    simulationGroup.schema.post('save', function (doc) {
        onSave(socket, doc);
    });
    simulationGroup.schema.post('remove', function (doc) {
        onRemove(socket, doc);
    });
}

function onSave(socket, doc, cb) {
    socket.emit('simulationGroup:save', doc);
}

function onRemove(socket, doc, cb) {
    socket.emit('simulationGroup:remove', doc);
}