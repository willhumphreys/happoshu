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


String.prototype.endsWith = function (suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

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

// Get a single thing
exports.show = function (req, res) {
    console.log('req is: ' + req);


    console.log(req.originalUrl)
    ///scenariofiles/spx_1minute/


    var noTrailingSlash = req.originalUrl;
    if (req.originalUrl.endsWith('/')) {
        noTrailingSlash = noTrailingSlash.substring(0, noTrailingSlash.length - 1);
    }

    console.log('noTrailing is ' + noTrailingSlash);

    var bucketSegment = req.originalUrl.substr(noTrailingSlash.lastIndexOf('/') + 1);
    console.log('bucket segment is: ' + bucketSegment);

    var s3 = new AWS.S3();


    function handleMatchedBucket() {
        var params = {
            Bucket: 'livedata-matcha',
            Prefix: '' + bucketSegment


        };

        s3.listObjects(params, function (err, data) {
            if (err) {
                console.log(err, err.stack);
                res.send('broken');
            } // an error occurred
            else {
                console.log('hello' + data);

                res.json(data.Contents);
            }           // successful response
        });
        return params;
    }


    handleMatchedBucket();
};

function handleError(res, err) {
    return res.send(500, err);
}
