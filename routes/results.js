var express = require('express');
var AWS = require('aws-sdk');
var underscore = require('underscore')
var router = express.Router();

router.get('/', function (req, res, next) {

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

                var finished = underscore.after(data.Contents.length, doResponse);

                console.log(data);

                console.log(data.Contents)


                for (var i = 0; i < data.Contents.length; i++) {
                    console.log(data.Contents[i].Key);

                    //  var params = {Bucket: 'livedata-matcha', Key: data.Contents[i].Key};
                    s3.getObject({
                        Bucket: 'livedata-matcha',
                        Key: data.Contents[i].Key
                    }).on('success', function (response) {
                        console.log("Key was", response.request.params.Key);
                        // var resultsJson = response.Body.toString()
                        var resultsJson = JSON.parse(response.data.Body.toString());
                        //  console.log(resultsJson);
                        allResultsJson = allResultsJson.concat(resultsJson);

                        console.log(allResultsJson);
                        finished();
                    }).send();


                }


            }

            function doResponse() {
                res.json(allResultsJson);
            }// successful response
        });

    }

    handleMatchedBucket('results', new AWS.S3());

});

module.exports = router;
