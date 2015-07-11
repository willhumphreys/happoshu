/**
 * Using Rails-like standard naming convention for endpoints.
 * GET     /things              ->  index
 * POST    /things              ->  create
 * GET     /things/:id          ->  show
 * PUT     /things/:id          ->  update
 * DELETE  /things/:id          ->  destroy
 */

'use strict';

var AWS = require('aws-sdk');

// Get list of things
exports.index = function (req, res) {

    function handleMatchedBucket(delimter, s3) {

        var params = {
            Bucket: 'livedata-matcha', /* required */
            Delimiter: delimter

        };

        s3.listObjects(params, function (err, data) {
            if (err) {
                console.log(err, err.stack);
                res.send('broken');
            } // an error occurred
            else {
                console.log(data);
                res.json(data);
            }           // successful response
        });

    }

    handleMatchedBucket('/', new AWS.S3());

};

function handleError(res, err) {
    return res.send(500, err);
}
