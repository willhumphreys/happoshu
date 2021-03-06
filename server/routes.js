/**
 * Main application routes
 */

'use strict';

var errors = require('./components/errors');
var path = require('path');

module.exports = function (app) {

    // Insert routes below
    app.use('/api/mergedPositions', require('./api/mergedPosition'));
    app.use('/api/executionStats', require('./api/executionStats'));
    app.use('/api/simulationGroups', require('./api/simulationGroup'));
    app.use('/api/scenarios', require('./api/scenario'));
    app.use('/api/results', require('./api/result'));

    // All undefined asset or api routes should return a 404
    app.route('/:url(api|auth|components|app|bower_components|assets)/*')
        .get(errors[404]);

    // All other routes should redirect to the index.html
    app.route('/*')
        .get(function (req, res) {
            res.sendFile(path.resolve(app.get('appPath') + '/index.html'));
        });
};
