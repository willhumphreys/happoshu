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
var underscore = require('underscore')


String.prototype.endsWith = function (suffix) {
    return this.indexOf(suffix, this.length - suffix.length) !== -1;
};

// Get list of things
exports.index = function (req, res) {

    function handleMatchedBucket(prefix, s3) {

        var allResultsJson = [];

        var params = {
            Bucket: 'livedata-matcha', /* required */
            Prefix: prefix

        };

        s3.listObjects(params, function (err, data) {
            if (err) {
                console.log(err, err.stack);
                res.send('broken');
            } // an error occurred
            else {



                console.log(data);

                console.log(data.Contents);

                var filteredMergedJsonNames = [];
                for (var i = 0; i < data.Contents.length; i++) {
                    var name = data.Contents[i].Key;
                    if (name.indexOf("SPX") >= 0 && name.indexOf("365") < 0) {
                        console.log("Pushing " + name)
                        filteredMergedJsonNames.push(name);
                    }
                }

                var finished = underscore.after(filteredMergedJsonNames.length, doResponse);

                var count = 0;
                for (var i2 = 0; i2 < filteredMergedJsonNames.length; i2++) {

                    var name2 = filteredMergedJsonNames[i2];

                    console.log(i2 + " of " + filteredMergedJsonNames.length + " " + name2);

                    console.log("Fetching " + name2);
                    s3.getObject({
                        Bucket: 'livedata-matcha',
                        Key: name2
                    }).on('success', function (response) {
                        count++;
                        console.log("Key was", response.request.params.Key + " " + count);
                        // var resultsJson = response.Body.toString()
                        var resultsJson = JSON.parse(response.data.Body.toString());
                        //  console.log(resultsJson);
                        allResultsJson = allResultsJson.concat(resultsJson);

                        //   console.log(allResultsJson);
                        finished();
                    }).send();

                }
                console.log("Finished retrieving data");
            }

            function doResponse() {
                console.log("successful response");
                res.json(allResultsJson);
            }// successful response
        });

    }

    handleMatchedBucket('results', new AWS.S3());

};

function handleError(res, err) {
    return res.send(500, err);
}
